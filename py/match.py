def match_example(point):
  match point:
    case (0, 0):
      print("origin")
    case(0, y):
      print(f"2:y={y}")
    case(x, 0):
      print(f"3:x={x}")
    case(x, y):
      print(f"4:x={x:05.3f}, y={y}") # : 用來格式化數值，還不是很了解格式。

a = (1.1, 1.2) # tuple
match_example(a)
match_example((0, 0))
match_example((0, 30))
match_example((3, 0))
match_example((5, 5))