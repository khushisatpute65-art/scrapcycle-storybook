# PowerShell script to rename component folders that contain spaces
# and update all import statements accordingly.
# Run from the repository root (c:\Users\khush\OneDrive\strybook\design-system-storybook)

$projectRoot = (Get-Location).Path
$src = Join-Path $projectRoot 'src/components'

# Mapping of old folder names (with spaces) to new PascalCase names (no spaces)
$renames = @{
    'Back Icon Button'        = 'BackIconButton'
    'Category Tab'            = 'CategoryTab'
    'Input Surface'           = 'InputSurface'
    'OTP Cell'                = 'OTPCell'
    'Progress Indicator'      = 'ProgressIndicator'
    'Radio Indicator'         = 'RadioIndicator'
    'Status Badge'            = 'StatusBadge'
    'Service Option Row'      = 'ServiceOptionRow'
    'Scrap Category Tile'     = 'ScrapCategoryTile'
    'OTP Verification Group'  = 'OTPVerificationGroup'
    'Impact Metric Card'       = 'ImpactMetricCard'
    'Search Bar'              = 'SearchBar'
    'Labeled Form Field'      = 'LabeledFormField'
    'Order Card'              = 'OrderCard'
    'Bottom Navigation'       = 'BottomNavigation'
    'Pickup Location Section' = 'PickupLocationSection'
    'Screen Header'           = 'ScreenHeader'
    'Service Selection Section'= 'ServiceSelectionSection'
    'Upload Section'          = 'UploadSection'
}

foreach ($old in $renames.Keys) {
    $new = $renames[$old]
    $oldPath = Join-Path $src $old
    $newPath = Join-Path $src $new
    if (Test-Path $oldPath) {
        Write-Host "Renaming $oldPath -> $newPath"
        Rename-Item -Path $oldPath -NewName $new -Force
    } else {
        Write-Host "[WARN] $oldPath does not exist, skipping"
    }
}

# After renaming folders, update import statements in all .tsx, .ts, .stories.tsx files.
$files = Get-ChildItem -Path $src -Recurse -Include *.tsx, *.ts, *.stories.tsx -File
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    foreach ($old in $renames.Keys) {
        $new = $renames[$old]
        # Escape regex special chars (space) – we simply replace the literal folder name.
        $pattern = [regex]::Escape($old)
        $content = $content -replace $pattern, $new
    }
    Set-Content -Path $file.FullName -Value $content -Force
    Write-Host "Updated imports in $($file.FullName)"
}

Write-Host "Renaming and import update complete."
