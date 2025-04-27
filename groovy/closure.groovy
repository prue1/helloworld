class C {
  def name
}

def a = { param ->
  name = 'def'
  if(param) name += param;

  def b = {println '------------------------'
           println 'this:    ' + getThisObject()
           println 'owner:   ' + getOwner()
           println 'delegate:' + getDelegate()
           println 'delegate == this  ? ' + (getDelegate() == getThisObject())
           println 'delegate == owner ? ' + (getDelegate() == getOwner())
           println 'this == owner     ? ' + (getThisObject() == getOwner())
           println '------------------------'
           println "name:${name}"
           name
          }
  
  println b()
  b.delegate = new C(name:'ppp')
  b.resolveStrategy = Closure.DELEGATE_FIRST
  b() + '123'
}

println a(999)