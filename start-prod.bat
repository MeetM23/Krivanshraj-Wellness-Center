@echo off
title Krivanshraj Wellness Center - Production Server
echo ====================================================
echo Building and Starting Krivanshraj Wellness Center...
echo ====================================================

set PATH=C:\Program Files\nodejs;%PATH%

call npm.cmd run build
call npm.cmd start
pause

