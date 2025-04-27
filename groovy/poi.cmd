@ECHO OFF

SET CLASS_PATH=".;F:\demo2\poi4\libs\*;D:\PostgreSQL\pgJDBC\*"

REM groovy.bat -cp ".;F:\java\poi-4.1.2\*;D:\PostgreSQL\pgJDBC\*" hello_poi.groovy
REM 以上這行指令，在PowerShell下行不通，必須設為變數才行
REM 但在命令列視窗則沒問題。

REM 設成環境變數，在.bat或.cmd中執行，應該是最好的辦法。

groovy.bat -cp %CLASS_PATH% hello_poi.groovy