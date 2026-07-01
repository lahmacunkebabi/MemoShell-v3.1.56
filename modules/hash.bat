@echo off
echo.
set /p hash_yol="Hash'ini kontrol edecegin dosya yolu: "
if exist "%hash_yol%" (
    echo Dosya imzasi hesaplaniyor...
    certutil -hashfile "%hash_yol%" SHA256
) else (
    echo Hata: Dosya bulunamadi!
)
pause