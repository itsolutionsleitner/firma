param([string]$SiteRoot = (Split-Path -Parent $PSScriptRoot))

$ErrorActionPreference = 'Stop'
$issues = [System.Collections.Generic.List[string]]::new()
$voidTags = @('area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr')
$pages = Get-ChildItem -LiteralPath $SiteRoot -Filter '*.html'
$referenceCount = 0

foreach ($page in $pages) {
  $markup = Get-Content -LiteralPath $page.FullName -Raw
  $structure = [regex]::Replace($markup, '(?s)<!--.*?-->', '')
  $structure = [regex]::Replace($structure, '(?is)(<script\b[^>]*>).*?(</script>)', '$1$2')
  $structure = [regex]::Replace($structure, '(?is)(<style\b[^>]*>).*?(</style>)', '$1$2')
  $stack = [System.Collections.Generic.Stack[string]]::new()
  foreach ($tag in [regex]::Matches($structure, '<(/?)([a-zA-Z][\w:-]*)\b[^>]*>')) {
    $name = $tag.Groups[2].Value.ToLowerInvariant()
    if ($tag.Groups[1].Value -eq '/') {
      if ($stack.Count -eq 0) {
        $issues.Add("$($page.Name): unexpected closing tag $name")
      } else {
        $expected = $stack.Pop()
        if ($expected -ne $name) { $issues.Add("$($page.Name): expected /$expected, found /$name") }
      }
    } elseif ($name -notin $voidTags -and -not $tag.Value.EndsWith('/>')) {
      $stack.Push($name)
    }
  }
  if ($stack.Count -gt 0) { $issues.Add("$($page.Name): unclosed tags $($stack -join ', ')") }
  $ids = @([regex]::Matches($markup, '\bid\s*=\s*"([^"]+)"') | ForEach-Object { $_.Groups[1].Value })
  foreach ($duplicate in ($ids | Group-Object | Where-Object Count -gt 1)) {
    $issues.Add("$($page.Name): duplicate id $($duplicate.Name)")
  }
  foreach ($reference in [regex]::Matches($markup, '\b(?:href|src)\s*=\s*"([^"]+)"')) {
    $value = [System.Net.WebUtility]::HtmlDecode($reference.Groups[1].Value)
    if ($value -match '^(?:[a-z][a-z0-9+.-]*:|//)') { continue }
    $parts = $value.Split('#', 2)
    $relative = $parts[0].Split('?', 2)[0]
    $target = if ($relative) { Join-Path $SiteRoot $relative } else { $page.FullName }
    $referenceCount++
    if (-not (Test-Path -LiteralPath $target)) {
      $issues.Add("$($page.Name): missing local target $value")
      continue
    }
    if ($parts.Count -gt 1 -and $parts[1] -and $target.EndsWith('.html')) {
      $targetMarkup = Get-Content -LiteralPath $target -Raw
      $fragment = [regex]::Escape($parts[1])
      if ($targetMarkup -notmatch ('\bid\s*=\s*"' + $fragment + '"')) {
        $issues.Add("$($page.Name): missing anchor $value")
      }
    }
  }
}

$cssPath = Join-Path $SiteRoot 'css/style.css'
$css = Get-Content -LiteralPath $cssPath -Raw
$tokens = [regex]::Replace($css, '(?s)/\*.*?\*/', '')
$tokens = [regex]::Replace($tokens, '"(?:\\.|[^"\\])*"|''(?:\\.|[^''\\])*''', '')
$depth = 0
foreach ($brace in [regex]::Matches($tokens, '[{}]')) {
  if ($brace.Value -eq '{') { $depth++ } else { $depth-- }
  if ($depth -lt 0) { $issues.Add('CSS: unexpected closing brace'); break }
}
if ($depth -ne 0) { $issues.Add("CSS: unbalanced braces (depth $depth)") }
foreach ($reference in [regex]::Matches($css, 'url\(\s*[''"]?([^''")]+)')) {
  $value = [System.Uri]::UnescapeDataString($reference.Groups[1].Value.Trim())
  if ($value -match '^(?:[a-z][a-z0-9+.-]*:|//|#)') { continue }
  if (-not (Test-Path -LiteralPath (Join-Path (Split-Path -Parent $cssPath) $value))) {
    $issues.Add("CSS: missing asset $value")
  }
}

if ($issues.Count -gt 0) {
  $issues | ForEach-Object { Write-Output $_ }
  exit 1
}
Write-Output "PASS: $($pages.Count) HTML pages; $referenceCount local references and anchors; balanced HTML/CSS; CSS assets present."
