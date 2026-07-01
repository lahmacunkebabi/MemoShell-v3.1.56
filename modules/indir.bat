@echo off
echo.
set /p link="Link: "
set /p ad="Kaydedilecek isim (orn: dosya.zip): "
echo Indiriliyor...
powershell -Command "Invoke-WebRequest -Uri '%link%' -OutFile '%ad%'"
echo Dosya cikariliyor...
if not exist "Downloads" mkdir "Downloads"
powershell -Command "Expand-Archive -Path '%ad%' -DestinationPath '.\Downloads' -Force"
echo Islem tamam! 'Downloads' klasorune bakabilirsin.
pause