@echo off
title SHOQ1 - Dev Server
cd /d "%~dp0SHOQ1"

where node >nul 2>&1
if errorlevel 1 (
    echo Node.js is not installed or not on PATH.
    echo Install from https://nodejs.org/ then double-click this file again.
    pause
    exit /b 1
)

if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo npm install failed.
        pause
        exit /b 1
    )
)

echo Starting SHOQ1 dev server...
echo Your browser will open automatically. Close this window to stop the server.
call npm run dev -- --open

pause
