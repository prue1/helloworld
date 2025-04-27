# list & shallow copy
a1 = [1, 3, 5];
a2 = [2, 4, a1];
a3 = a2[1:3]; # 不包含尾端
print('a1:', a1);
print('a2:', a2);
print('a3:', a3);
a3[1][0] = 6; # 影響到 b 物件的第1個數值(index = 0)
print('*** assign c[1][0] = 6');
print('---------------------');
print('a1:', a1);
print('a2:', a2);
print('a3:', a3);
print('len(a3) = ', len(a3));

# import 模組
from datetime import date
print(date.today());

# 用來創建 list 內容的方法, 理解一下
b1 = ['a', 'b', 'c'];
b2 = [(i, b1[i % len(b1)]) for i in range(0, 10)];
print(b2);

# 基本操作
c1 = [1 ,2 ,3, 4, 5];
print(c1);
print(c1[:]);
print(c1[:2]);
print(c1[2:]);

c1[:] = []; # 清空
del c1[:]; # 本行與上一行具有同樣效果
print(c1);
del c1; # 刪除變數本身, 變數 c1 不復存在.
# print(c1); # 本行 error.

# 重新定義 c1
c1 = ['a', 'b', 'c'];
print(c1);

c1.append('d');
print(c1);
c1[len(c1):] = 'e';
print(c1);

d1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
d2 = [i[0] for i in d1];
print(d2);
d3 = [[row[i] for row in d1] for i in range(3)];
print(d3);