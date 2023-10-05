# x = "yessir"
# y = "aaaa"
# print(x, y)
# print(f"ez {x} and {y}")

# o = ""
# for i in range(0, 100, 3):
#    if (i%2 == 0):
#       o += f"{str(i)}, "

# print(o)

# a = 2
# b = 5
# if (a%2 == 0):
#    print("a%2 == 0")
# else:
#    print("a%2 ==", a%2)
# if (b%2 == 0):
#    print("b%2 == 0")
# else:
#    print("b%2 ==", b%2)

# print(3 + 3)
# print(float("3") + int(3))
# print(float("3"))

# aa = "world"
#index
# w => 0 , -5
# o => 1, -4
# r => 2, -3
# l => 3, -2
# d => 4, -1

# print(aa[0])
# print(aa[4])
# print(aa[1:4])
# print(aa[-2])

# bb = "Xin chao Trung"
# print(bb[3:8])
# print(bb[::])
# print(bb[1::])
# print(bb[::-3])
# print(bb[3:])
# print(bb[:-3])

# c = 3*3
# d = "3" * 3

# print(c, d)
# print(type(c), type(d), "for c, d")

import math
total = 0
num = int(math.floor(float(input("Type a number"))) + 1)
if (num <= 0):
   print("Error, please type a number that is not less than 0 !")
if (0 < num <= 1000):
   for ii in range(0, num):
      if (ii % 7 == 0):
         total += ii
if (1000 < num <= 2000):
   for ii in range(0, num):
      if (ii % 5 == 0):
         total += ii
if (num > 2000):
   print("Error, please type a number that is less than 2000 !")