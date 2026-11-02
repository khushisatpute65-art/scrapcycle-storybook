## PowerShell script to rename component folders that contain spaces to PascalCase (no spaces)
## and update all import statements accordingly.
## Run from the repository root.

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

# Rename folders recursively under Atoms, Molecules, Organisms
foreach ($oldName in $renames.Keys) {
    $newName = $renames[$oldName]
    # Find directories matching the old name (case-sensitive) under src/components
    $dirs = Get-ChildItem -Path $src -Recurse -Directory -Filter $oldName -ErrorAction SilentlyContinue
    foreach ($dir in $dirs) {
        $parent = Split-Path $dir.FullName -Parent
        $newPath = Join-Path $parent $newName
        if (Test-Path $newPath) {
            Write-Host "[WARN] Target path $newPath already exists, skipping rename of $($dir.FullName)"
        } else {
            Rename-Item -Path $dir.FullName -NewName $newName -Force
            Write-Host "Renamed $($dir.FullName) -> $newPath"
        }
    }
}

# Update import statements in all .tsx, .ts, .stories.tsx files
$files = Get-ChildItem -Path $src -Recurse -Include *.tsx, *.ts, *.stories.tsx -File
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $original = $content
    foreach ($oldName in $renames.Keys) {
        $newName = $renames[$oldName]
        # Escape for regex; replace folder name in import paths (both single and double quotes)
        $escapedOld = [regex]::Escape($oldName)
        $content = $content -replace $escapedOld, $newName
    }
    if ($content -ne $original) {
        Set-Content -Path $file.FullName -Value $content -Force
        Write-Host "Updated imports in $($file.FullName)"
    }
}

Write-Host "Renaming and import updates complete."
