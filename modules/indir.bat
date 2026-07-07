@echo off
setlocal enabledelayedexpansion

echo.
set /p url="Indir linki: "
set /p filename="Kaydedilecek isim: "
bitsadmin /transfer MemoDownload /download /resume "%url%" "%cd%\%filename%"
echo Dosya indirildi!
pause
