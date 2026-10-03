$ErrorActionPreference = 'Stop'

$project = 'C:\dipak-portfolio'
$assetDir = Join-Path $project 'public\projects'
$pageFile = Join-Path $project 'app\page.tsx'
$cssFile = Join-Path $project 'app\globals.css'
$sourceDir = Split-Path -Parent $MyInvocation.MyCommand.Path

if (-not (Test-Path $project)) {
    throw "Portfolio folder not found: $project"
}

New-Item -ItemType Directory -Force $assetDir | Out-Null

foreach ($name in @('qualimind-banner.png','nirvira-banner.png')) {
    $src = Join-Path $sourceDir $name
    $dst = Join-Path $assetDir $name
    if (-not (Test-Path $src)) {
        throw "Missing asset: $src"
    }
    Copy-Item $src $dst -Force
}

Copy-Item $pageFile (Join-Path $project 'app\page.before-project-banners.tsx') -Force
Copy-Item $cssFile (Join-Path $project 'app\globals.before-project-banners.css') -Force

$page = Get-Content $pageFile -Raw

# Add banner paths once, immediately after each project's title line.
if ($page -notmatch 'banner:\s*["'']\/projects\/qualimind-banner\.png') {
    $pattern = '(title\s*:\s*["'']QualiMind AI["'']\s*,)'
    $replacement = '$1' + "`r`n    banner: \"/projects/qualimind-banner.png\","
    $page = [regex]::Replace($page, $pattern, $replacement, 1)
}

if ($page -notmatch 'banner:\s*["'']\/projects\/nirvira-banner\.png') {
    $pattern = '(title\s*:\s*["'']Nirvira["'']\s*,)'
    $replacement = '$1' + "`r`n    banner: \"/projects/nirvira-banner.png\","
    $page = [regex]::Replace($page, $pattern, $replacement, 1)
}

# Replace the project visual header with the real poster banner while keeping
# the existing project-window markup below it.
$visualPattern = '(?s)<div className=["'']project-visual["'']>\s*<div className=["'']project-grid["'']\s*/>\s*<div className=["'']project-window["'']>'
$visualReplacement = @'
<div className="project-visual project-banner">
  <img
    src={project.banner}
    alt={`${project.title} project poster`}
  />
  <div className="banner-overlay">
    <span>{project.category}</span>
    <strong>{project.title}</strong>
    <small>OPEN PROJECT ↗</small>
  </div>
</div>
<div className="project-window">
'@

if ([regex]::IsMatch($page, $visualPattern)) {
    $page = [regex]::Replace($page, $visualPattern, $visualReplacement, 1)
}
else {
    Write-Host 'Project visual pattern was not found; banner files were installed.' -ForegroundColor Yellow
}

Set-Content $pageFile $page -Encoding UTF8

$cssMarker = '/* ===== PROJECT POSTER BANNERS ===== */'
$css = Get-Content $cssFile -Raw
if ($css -notmatch [regex]::Escape($cssMarker)) {
@'

/* ===== PROJECT POSTER BANNERS ===== */
.project-banner{
  position:relative;
  width:100%;
  height:310px;
  overflow:hidden;
  background:#050816;
  border-bottom:1px solid rgba(0,200,255,.16);
}
.project-banner img{
  width:100%;
  height:100%;
  display:block;
  object-fit:cover;
  object-position:center;
  transform:scale(1.01);
  transition:transform .5s ease, filter .5s ease;
}
.project-card:hover .project-banner img{
  transform:scale(1.045);
  filter:brightness(1.07) saturate(1.12);
}
.banner-overlay{
  position:absolute;
  inset:0;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  padding:24px;
  background:linear-gradient(to top, rgba(3,7,17,.94), rgba(3,7,17,.42) 43%, transparent 78%);
}
.banner-overlay span{
  font-size:12px;
  font-weight:800;
  letter-spacing:.18em;
  color:#F6C453;
  margin-bottom:7px;
}
.banner-overlay strong{
  font-size:28px;
  line-height:1.05;
  color:#fff;
}
.banner-overlay small{
  margin-top:9px;
  font-size:11px;
  font-weight:700;
  letter-spacing:.14em;
  color:#00C8FF;
}
@media (max-width:768px){
  .project-banner{height:230px;}
  .banner-overlay strong{font-size:23px;}
}
'@ | Add-Content $cssFile
}

Write-Host "`n=== PROJECT BANNERS INSTALLED ===" -ForegroundColor Cyan
Get-ChildItem $assetDir | Select-Object Name, Length

Write-Host "`n=== BANNER REFERENCES ===" -ForegroundColor Cyan
Select-String -Path $pageFile -Pattern 'qualimind-banner|nirvira-banner|project-banner' | Select-Object LineNumber, Line

Write-Host "`n=== BUILD ===" -ForegroundColor Cyan
Set-Location $project
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run build

Write-Host "`nDONE. Refresh http://localhost:3000 and scroll to Projects." -ForegroundColor Green
