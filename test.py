x = input("Rock => 1; Paper => 2; Scissors => 3. Enter your answer:  ")
import random
y = random.randint(1, 3)
x = int(x)
text = ['in text', "Rock", "Paper", "Scissors"]
print ("Your answer: ", text[x], x, "\nSystem's answer: ", text[y], y,".\n")
if (x == y):
    print ( "Result: TIE.")
else:
    if ((x==1 and y == 3) or (x == 2 and y == 1) or (x==3 and y == 2)):
        print ("Result: you WIN.")
    else:
        print ("Result: you LOSE.")
print(x, y)