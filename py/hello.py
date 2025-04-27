# for & if..elif..else
for a in range(1, 10):
  print(a, end=' '); # 加上 end=' ', 使其不換行
  if a % 3 == 0:
    print("整除3");
  elif a % 3 == 1:
    print("除以3餘1");
  elif a % 3 == 2:
    print("除以3餘2");
  else:
    print("其他");  
        
# class
class AA:
  def f(self, arg1):
    print("ccc:", end = '');
    print(arg1);
        
a1 = AA(); # 使用物件, 語法與java不同(不需要 new 關鍵字)
a1.f("ddd");
      
# 自訂function      
def ff():
  print("123");
        
ff();

# 用 for 畫三角形
temp = "";
for a in range(0, 5):
  for b in range(0, 2 * a + 1):
    temp += "*";
  print(temp);
  temp = "";

# 使用內建函數
a3 = -5;
print(a3);
print(abs(a3));

# 使用物件
s = str('bbb');
print(s.capitalize());


