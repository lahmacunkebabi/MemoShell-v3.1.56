@echo off
title MemoShell v3.1.69
color 0B

:menu
cls
echo ===========================================
echo           MemoShell v3.1.69
echo        Developer: Memo's Projects
echo ===========================================
echo 1. Dosya indir ve Klasore cikar
echo 2. Dosya veya Klasor sil
echo 3. Dosya Hash (Guvenlik) Kontrolu
echo 4. Cikis
echo ===========================================
echo.
set /p secim="Bir islem sec (1-4): "

if "%secim%"=="1" call modules\indir.bat
if "%secim%"=="2" call modules\sil.bat
if "%secim%"=="3" call modules\hash.bat
if "%secim%"=="4" exit

goto menu