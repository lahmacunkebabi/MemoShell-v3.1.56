@echo off
setlocal enabledelayedexpansion

:menu
cls
echo ===========================================
echo           MemoShell v3.1.69
echo        Developer: Memo's Projects
echo ===========================================
echo.
echo 1. Dosya indir ve Klasore cikart
echo 2. Dosya veya Klasor sil
echo 3. Dosya Hash Guvenlik Kontrolu
echo 4. Cikis
echo.
set /p choice="Bir islem sec: "

if "%choice%"=="1" goto download
if "%choice%"=="2" goto delete
if "%choice%"=="3" goto hash
if "%choice%"=="4" exit /b

goto menu

:download
echo.
set /p url="Indir linki: "
set /p filename="Kaydedilecek isim: "
bitsadmin /transfer MemoDownload /download /resume "%url%" "%cd%\%filename%"
echo Dosya indirildi!
pause
goto menu

:delete
echo.
set /p filepath="Silinecek dosya/klasor yolu: "
if exist "%filepath%" (
    del /q "%filepath%" 2>nul || rmdir /s /q "%filepath%" 2>nul
    echo Silme islemi tamamlandi!
) else (
    echo Hata: Yol bulunamadi!
)
pause
goto menu

:hash
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
goto menu
