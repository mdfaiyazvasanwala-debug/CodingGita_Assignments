Level 6 — Midpoint, Half & String Logic

# Question-45
text = input("Enter an odd-length string: ")
middle = len(text) // 2
print(text[middle])


# Question-46
text = input("Enter an even-length string: ")
middle = len(text) // 2

print("First Half:", text[:middle])
print("Second Half:", text[middle:])


# Question-47
text = input("Enter a string: ")
length = len(text)
first = ""
second = ""
middle = ""

for i in range(length):
    if i < length // 2:
        first += text[i]
    elif length % 2 == 1 and i == length // 2:
        middle = text[i]
    else:
        second += text[i]

print("First Half:", first)
if length % 2 == 1:
    print("Middle:", middle)
print("Second Half:", second)


# Question-48
text = input("Enter an even-length string: ")
length = len(text)
equal = True

for i in range(length // 2):
    if text[i] != text[i + length // 2]:
        equal = False

if equal:
    print("Equal Halves")
else:
    print("Different Halves")


# Question-49
text = input("Enter a string: ")
symmetric = True

for i in range(len(text) // 2):
    if text[i] != text[len(text) - 1 - i]:
        symmetric = False

if symmetric:
    print("Symmetric")
else:
    print("Not Symmetric")


# Question-50
text = input("Enter a string: ")

for i in range(len(text)):
    if i % 2 == 0:
        print(text[i], end="")


# Question-51
text = input("Enter a string: ")
even = 0
odd = 0

for i in range(len(text)):
    if i % 2 == 0:
        even += 1
    else:
        odd += 1

print("Even Index =", even, "Odd Index =", odd)


# Question-52
text = input("Enter an even-length string: ")
result = ""

for i in range(0, len(text), 2):
    result += text[i + 1] + text[i]

print(result)
