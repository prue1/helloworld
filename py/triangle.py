import math

a = [math.sin(i / 180 * math.pi) for i in range(0, 91)]

for i in a:
    print(i)

print(len(a))
