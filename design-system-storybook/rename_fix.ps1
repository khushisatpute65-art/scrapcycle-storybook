# PowerShell script to fix spaced component folders and imports in design-system-storybook
# Run from the repository root (design-system-storybook)

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

# 1. Rename folders and files inside them
foreach ($old in $renames.Keys) {
    $new = $renames[$old]
    $oldPath = Join-Path $src $old
    if (Test-Path $oldPath) {
        $newPath = Join-Path $src $new
        Write-Host "Renaming folder: $oldPath -> $newPath"
        Rename-Item -Path $oldPath -NewName $new -Force
        # Rename files inside the folder to match new name (remove spaces)
        $files = Get-ChildItem -Path $newPath -File
        foreach ($f in $files) {
            $newFileName = $f.Name -replace [regex]::Escape($old), $new
            if ($newFileName -ne $f.Name) {
                $dest = Join-Path $newPath $newFileName
                Write-Host "Renaming file: $($f.FullName) -> $dest"
                Rename-Item -Path $f.FullName -NewName $newFileName -Force
            }
        }
    } else {
        Write-Host "[WARN] Folder not found: $oldPath"
    }
}

# 2. Update import statements in all .tsx, .ts, .stories.tsx files
$files = Get-ChildItem -Path $src -Recurse -Include *.tsx, *.ts, *.stories.tsx -File
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $original = $content
    foreach ($old in $renames.Keys) {
        $new = $renames[$old]
        $pattern = [regex]::Escape($old)
        $content = $content -replace $pattern, $new
    }
    if ($content -ne $original) {
        Set-Content -Path $file.FullName -Value $content -Force
        Write-Host "Updated imports in: $($file.FullName)"
    }
}

Write-Host "All renames and import updates completed."

