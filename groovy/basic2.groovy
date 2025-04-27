def a = {123}
println a()

Closure b = {456}
println b()

Closure<Integer> c = {789}
println c()

Closure d = {"$it"}
println d('abc')