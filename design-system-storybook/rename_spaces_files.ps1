## PowerShell script to rename component files that contain spaces
## and update import statements accordingly.
## Run from the repository root.

$projectRoot = (Get-Location).Path
$src = Join-Path $projectRoot 'src/components'

# Function to convert a spaced name to PascalCase (remove spaces)
function Convert-ToPascal($name) {
    $parts = $name -split '\s+'
    $pascal = ($parts | ForEach-Object { $_.Substring(0,1).ToUpper() + $_.Substring(1) }) -join ''
    return $pascal
}

# Find all files whose name contains a space
$filesWithSpaces = Get-ChildItem -Path $src -Recurse -File | Where-Object { $_.Name -match '\s' }

foreach ($file in $filesWithSpaces) {
    $dir = Split-Path $file.FullName -Parent
    $oldName = $file.Name
    $newBase = Convert-ToPascal ($file.BaseName)
    $newName = "$newBase$($file.Extension)"
    $newPath = Join-Path $dir $newName
    if (Test-Path $newPath) {
        Write-Host "[WARN] Target file $newPath already exists, skipping $($file.FullName)"
        continue
    }
    Rename-Item -Path $file.FullName -NewName $newName -Force
    Write-Host "Renamed $($file.FullName) -> $newPath"
}

# Update import statements in all .tsx, .ts, .stories.tsx files
$allFiles = Get-ChildItem -Path $src -Recurse -Include *.tsx, *.ts, *.stories.tsx -File
foreach ($f in $allFiles) {
    $content = Get-Content $f.FullName -Raw
    $original = $content
    # Replace any occurrence of a spaced filename (without extension) with its PascalCase version
    foreach ($file in $filesWithSpaces) {
        $oldBase = $file.BaseName
        $newBase = Convert-ToPascal $oldBase
        $escapedOld = [regex]::Escape($oldBase)
        $content = $content -replace $escapedOld, $newBase
    }
    if ($content -ne $original) {
        Set-Content -Path $f.FullName -Value $content -Force
        Write-Host "Updated imports in $($f.FullName)"
    }
}

Write-Host "File renaming and import updates complete."
