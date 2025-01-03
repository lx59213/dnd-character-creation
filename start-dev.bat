@echo off
echo Killing any process using port 3000...
FOR /F "tokens=5" %%P IN ('netstat -a -n -o ^| findstr :3000') DO TaskKill.exe /F /PID %%P 2>NUL
echo Starting development server...
start chrome --disable-web-security --user-data-dir="%TEMP%\chrome-dev" --auto-open-devtools-for-tabs http://localhost:3000
timeout /t 2 /nobreak >nul
set BROWSER=none
cmd /k "npm start"
