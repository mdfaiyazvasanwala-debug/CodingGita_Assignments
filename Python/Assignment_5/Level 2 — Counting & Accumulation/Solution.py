Level 2 — Counting & Accumulation

# Question-7
start = int(input("Enter start: "))
end = int(input("Enter end: "))
total = 0

for i in range(start, end + 1):
    total += i

print(total)


# Question-8
n = int(input("Enter N: "))
count = 0

for i in range(1, n + 1):
    if i % 3 == 0:
        count += 1

print(count)


# Question-9
n = int(input("Enter N: "))
total = 0

for i in range(1, n + 1):
    if i % 4 == 0:
        total += i

print(total)


# Question-10
n = int(input("Enter N: "))
count = 0

for i in range(1, n + 1):
    if i % 3 == 0 and i % 5 == 0:
        count += 1

print(count)


# Question-11
n = int(input("Enter N: "))
total = 0

for i in range(1, n + 1):
    if i % 3 != 0:
        total += i

print(total)


# Question-12
n = int(input("Enter N: "))
even = 0
odd = 0

for i in range(1, n + 1):
    if i % 2 == 0:
        even += 1
    else:
        odd += 1

print("Even =", even, "Odd =", odd)


# Question-13
n = int(input("Enter N: "))
total = 0

for i in range(1, n + 1):
    total += i
    print(total)


# Question-14
n = int(input("Enter N: "))
product = 1

for i in range(1, n + 1):
    product *= i
    print(product)
