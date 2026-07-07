@echo off
setlocal enabledelayedexpansion

echo.
set /p filepath="Silinecek dosya/klasor yolu: "
if exist "%filepath%" (
    del /q "%filepath%" 2>nul || rmdir /s /q "%filepath%" 2>nul
    echo Silme islemi tamamlandi!
) else (
    echo Hata: Yol bulunamadi!
)
pause
