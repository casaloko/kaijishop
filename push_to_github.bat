@echo off
set GIT="C:\Program Files\Git\bin\git.exe"
set REPO=C:\Users\jozef\OneDrive\Desktop\kaijishop

cd /d "%REPO%"

echo === Initializing Git ===
%GIT% init
%GIT% branch -M main

echo === Adding Remote ===
%GIT% remote add origin https://github.com/casaloko/kaijishop.git

echo === Fetching Remote ===
%GIT% fetch origin

echo === Resetting to Remote ===
:: Create main branch if it doesn't exist locally, reset to match remote state but preserve all local files.
%GIT% reset origin/main

echo === Adding all files ===
%GIT% add .

echo === Committing ===
%GIT% commit -m "feat: add missing source code"

echo === Pushing to GitHub ===
:: This might open a browser window or pop-up for login
%GIT% push -u origin main

echo.
echo === DONE ===
pause
