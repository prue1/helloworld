a1 = [[[i, j, i*j] for j in range(1, 10) ] for i in range(1, 10)];
        
def table99():
  for i in [0, 3, 6]:
    for j in a1[i]:
      print(j);

a2 = [[i for j in range(1, 10)] for i in [[1, 2, 3], [4, 5, 6], [7, 8, 9]]]
print(a2)