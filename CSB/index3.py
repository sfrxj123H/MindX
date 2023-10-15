a = float(input("Money"))
x = int(input("Good reviews (+3%)"))
y = int(input("Bad reviews(-3%)"))
for i in range(0, x):
    a += a * 0.03
for ii in range(0, y):
    a -= a * 0.03
print(a)