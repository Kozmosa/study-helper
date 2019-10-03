@echo off
echo "Start building"
mkdir ..\public
copy ..\src\* ..\public\src\
copy ..\styles\* ..\public\styles\
echo "Build success"