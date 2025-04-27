import random

a = int(random.random() * 20);
b = int(random.random() * 20);
print('a:', a);
print('b:', b);
a = 3000;
b = 3000;
print('a:', a);
print('b:', b);
print(a is b); # 比較記憶體 
print(a == b); # is、 == 結果相同，是因為脚本的緣故。
print(id(a));
print(type(a));
print(type(a) == type(b));

import base64
e1 = base64.b64encode(b'data to be encoded')
e2 = base64.b64decode(base64.b64encode(b'data to be encoded'))
print(b'1:' + e1)
print(b'2:' + e2)

c = 'hello world.'
def my_function():
  print(c)

my_function()

d = [i for i in range(10) if i % 2 == 0]
print(d)