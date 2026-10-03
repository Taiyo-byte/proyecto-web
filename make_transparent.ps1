Add-Type -AssemblyName System.Drawing

$src = "C:\Users\alexc\.gemini\antigravity\brain\5463a388-288e-482d-82b3-76f2a0fbdf54\.user_uploaded\media_1790031188205.png"
$dest = "c:\xampp\htdocs\web lara\images\logo.png"

$bmp = [System.Drawing.Bitmap]::FromFile($src)
$w = $bmp.Width
$h = $bmp.Height

$newBmp = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($newBmp)
$g.DrawImage($bmp, 0, 0, $w, $h)
$g.Dispose()
$bmp.Dispose()

$minX = $w
$maxX = 0
$minY = $h
$maxY = 0

for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        $pixel = $newBmp.GetPixel($x, $y)
        # Check for white / off-white background
        if ($pixel.R -gt 235 -and $pixel.G -gt 235 -and $pixel.B -gt 235) {
            $newBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, $pixel.R, $pixel.G, $pixel.B))
        } else {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

$cropW = [Math]::Max(1, $maxX - $minX + 1)
$cropH = [Math]::Max(1, $maxY - $minY + 1)

$croppedBmp = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gCrop = [System.Drawing.Graphics]::FromImage($croppedBmp)
$rectDest = New-Object System.Drawing.Rectangle(0, 0, $cropW, $cropH)
$gCrop.DrawImage($newBmp, $rectDest, $minX, $minY, $cropW, $cropH, [System.Drawing.GraphicsUnit]::Pixel)
$gCrop.Dispose()
$newBmp.Dispose()

$croppedBmp.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
$croppedBmp.Dispose()

Write-Host "Transparent logo saved successfully to $dest"
