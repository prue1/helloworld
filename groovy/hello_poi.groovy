import org.apache.poi.ss.usermodel.*
import org.apache.poi.hssf.usermodel.*
import org.apache.poi.xssf.usermodel.*
import org.apache.poi.ss.util.*

import groovy.sql.Sql

class Hello {
    def a = 123;
    
    def f(){
        return 456;
    }
    
    def exec(){
        println "hello ${a}";
        println "hello ${f()}";
    
        def b = 'xyz';
        println "value:${b}";
    }
    
    def displayExcel(){
        def fis = new FileInputStream("f:\\temp\\template.xlsx");
        println fis.available();

        def wb = new XSSFWorkbook(fis);
        def sheet = wb.getSheetAt(0);

        println '-----\t-----\t-----';
        for(i in 1..12){
            def row = sheet.getRow(i);
            def v1 = row.getCell(0).getStringCellValue();
            def v2 = row.getCell(1).getNumericCellValue().intValue();
            def v3 = row.getCell(2).getNumericCellValue().doubleValue();
            println "${v1}\t${v2}\t${v3}";
        }
        println '-----\t-----\t-----';

        def c = Calendar.getInstance();
        println c.get(Calendar.HOUR);
    }
    
    def postgres(){
        // jdbc driver 必須放在同一個目錄
        def dbUrl      = "jdbc:postgresql://localhost/mydb"
        def dbUser     = "user1"
        def dbPassword = "user1"
        def dbDriver   = "org.postgresql.Driver"
        
        def sql = Sql.newInstance(dbUrl, dbUser, dbPassword, dbDriver)
        
        sql.eachRow('SELECT sn, creation_time, note FROM aaa ORDER BY sn') { row ->
        println "$row.sn ($row.creation_time) $row.note" }
    }
    
    def static main(String... args){
        def hello = new Hello();
        hello.exec();
        hello.displayExcel();
        hello.postgres();
    }
}