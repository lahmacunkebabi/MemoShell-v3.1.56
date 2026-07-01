@echo off
echo.
set /p sil_yol="Silinecek yol: "
if exist "%sil_yol%" (
    echo Siliniyor...
    rd /s /q "%sil_yol%" 2>nul || del /f /q "%sil_yol%"
    echo Islem tamamlandi.
) else (
    echo Hata: Yol bulunamadi!
)
pause