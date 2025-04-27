import groovy.transform.Field;

class Basic {
  def list = []
  
  def f1(String s){
    println "f1:${s}";
  }

  def f2(c){
    c.delegate = this
    c()
  }

  def add(id){
    list.add(id)
  }

  def printAll(){
    list.each {
      println "< ${it} >";
    }
  }
}

@Field Basic b = new Basic();
b.f2 {
  f1 'aaa'
}

def f2(c){
  b.f2(c)
}

def add(id){
  b.add(id)
}

def printAll(){
  b.printAll();
}

f2 {
  f1 'ccc'
}

add 'abc'
add 'def'
add 'ghi'

printAll()