import groovy.transform.Field;

@Field def str = 'hello world'
println str

def f(){
  println str
}

f()

def str2 = 'good morning'
def f2(s){
  println s
}

f2(str2)

/*
import org.codehaus.groovy.runtime.InvokerHelper
class Main extends Script {                     
    def run() {                                 
        println 'Groovy world!'                 
    }
    static void main(String[] args) {           
        InvokerHelper.runScript(Main, args)     
    }
}
*/