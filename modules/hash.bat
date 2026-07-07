@echo off
setlocal enabledelayedexpansion

echo.
set /p filepath="Hash'ini kontrol edecek dosya yolu: "
if exist "%filepath%" (
    for /f "tokens=*" %%A in ('certutil -hashfile "%filepath%" SHA256 ^| findstr /v "\:\"') do (
        set "hash=%%A"
    )
    echo.
    echo SHA256 Hash:
    echo !hash!
) else (
    echo Hata: Dosya bulunamadi!
)
pause
