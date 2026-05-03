@echo off
set GIT="C:\Program Files\Git\bin\git.exe"
set REPO=C:\Users\jozef\OneDrive\Desktop\kaijishop

cd /d "%REPO%"

%GIT% config user.email "casaloko@users.noreply.github.com"
%GIT% config user.name "casaloko"

%GIT% reset origin/main
%GIT% add .
%GIT% reset HEAD .github/workflows/

%GIT% commit -m "feat: complete missing source code from local"

%GIT% push -u origin main
