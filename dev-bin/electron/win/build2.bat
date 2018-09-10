cd %~dp0
cd ../../../
cd www/src
copy ..\config\startup-webapp.bat ..\www\webapp-wrapper-win32-x64\
copy ..\webapp-config.json ..\www\webapp-wrapper-win32-x64\
copy ..\autoit\startup-webapp.exe ..\www\webapp-wrapper-win32-x64\
ren ..\www\webapp-wrapper-win32-x64\startup-webapp.exe hybird-app.exe
cd ..\www\webapp-wrapper-win32-x64\
pause
start /B hybird-app.exe
