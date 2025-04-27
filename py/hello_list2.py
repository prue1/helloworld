print("d1:---------")
d1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
d1a = [i[0] for i in d1]
print(d1a)

print("d2:---------")
d2 = [row for row in d1]
print(d2)

print("d3:---------")
d3 = [[row[i] for row in d1] for i in range(3)]
print(d3)

print("d4:---------")
d4 = [(i, j) for i in range(2) for j in range(5)]
print(d4)

print("d5:---------")
d5 = [1, 2, 3]
d5a = [x for x in d5]
d5b = [[x] for x in d5]
print(d5a)
print(d5b)

print("d6:---------")
d6 = [];
d6.append(100)
d6.append(200)
print(d6)

for i in range(2):
  for j in range(5):
    print(f'{i}, {j}')

print("d7:---------")
d7 = [[1, 2, 3], [4, 5, 6], [7, 8, 9, 0]]
d7a = [[j] for i in d7 for j in i]
d7b = [j for i in d7 for j in i]
print(d7a)
print(d7b)