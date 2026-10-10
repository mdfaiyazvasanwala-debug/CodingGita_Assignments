Level 3 — Factorial & Product Logic

# Question-15
n = int(input("Enter N: "))
fact = 1

for i in range(1, n + 1):
    fact *= i

print(fact)


# Question-16
n = int(input("Enter N: "))
fact = 1

for i in range(1, n + 1):
    fact *= i
    print(i, "! =", fact)


# Question-17
n = int(input("Enter N: "))
product = 1

for i in range(2, n + 1, 2):
    product *= i

print(product)


# Question-18
n = int(input("Enter N: "))
product = 1

for i in range(1, n + 1, 2):
    product *= i

print(product)


# Question-19
n = int(input("Enter an even number: "))
product = 1

for i in range(n, 0, -2):
    product *= i

print(product)


# Question-20
n = int(input("Enter N: "))
total = 0

for i in range(1, n + 1):
    total += i ** 2

print(total)


# Question-21
n = int(input("Enter N: "))
total = 0

for i in range(1, n + 1):
    total += i ** 3

print(total)


# Question-22
n = int(input("Enter N: "))
fact = 1
total = 0

for i in range(1, n + 1):
    fact *= i
    total += fact

print(total)
