x = float(input("Covert to seconds: "))
hours = int(x // 3600)
minutes = int(x % 3600 // 60)
seconds = x % 3600 % 60
seconds = int(seconds) if seconds % 1 == 0 else round(seconds, 2)


def addSeperators(hour, minute, second, seperator):
    string = ""
    if second != 0 and (minute != 0 or hour != 0):
        string = f"{seperator} {second} seconds"
    else:
        if second != 0:
            string = f"{second} seconds"
    if minute != 0:
        string = f"{minute} minutes {string}"
    if hour != 0 and minute != 0:
        string = f"{hour} hours {seperator} {string}"
    else:
        if hour != 0:
            string = f"{hour} hours {string}"
    return string


print(addSeperators(hours, minutes, seconds, "-"))
if x < 3600:
    print("Error!")
