@echo off
echo.
set /p link="Link: "
set /p ad="Kaydedilecek isim (orn: dosya.zip): "
echo Indiriliyor...
powershell -Command "Invoke-WebRequest -Uri '%link%' -OutFile '%ad%'"
echo Dosya aciliyor...
if not exist "Downloads" mkdir "Downloads"
echo Acilıyor... (Windows Explorer ile)
explorer "%ad%"
pause