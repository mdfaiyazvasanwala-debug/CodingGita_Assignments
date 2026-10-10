Level 4 — Number & Digit Logic

# Question-23
n = int(input("Enter a positive integer: "))
count = 0

for i in range(1, n + 1):
    if n == 0:
        count = 1
        break
    count += 1
    n //= 10

print(count)


# Question-24
n = abs(int(input("Enter a number: ")))
total = 0

for i in range(len(str(n))):
    total += n % 10
    n //= 10

print(total)


# Question-25
n = abs(int(input("Enter a number: ")))
product = 1

for i in range(len(str(n))):
    product *= n % 10
    n //= 10

print(product)


# Question-26
n = abs(int(input("Enter a number: ")))
count = 0

for i in range(len(str(n))):
    digit = n % 10
    if digit % 2 == 0:
        count += 1
    n //= 10

print(count)


# Question-27
n = abs(int(input("Enter a number: ")))
total = 0

for i in range(len(str(n))):
    digit = n % 10
    if digit % 2 == 0:
        total += digit
    n //= 10

print(total)


# Question-28
n = int(input("Enter a number: "))
n = abs(n)
largest = 0

for i in range(len(str(n))):
    digit = n % 10
    if digit > largest:
        largest = digit
    n //= 10

print(largest)


# Question-29
n = abs(int(input("Enter a number: ")))
smallest = 9

for i in range(len(str(n))):
    digit = n % 10
    if digit < smallest:
        smallest = digit
    n //= 10

print(smallest)


# Question-30
n = int(input("Enter a positive integer: "))
reverse = 0

for i in range(len(str(n))):
    reverse = reverse * 10 + n % 10
    n //= 10

print(reverse)


# Question-31
n = int(input("Enter a number: "))
original = n
reverse = 0

for i in range(len(str(n))):
    reverse = reverse * 10 + n % 10
    n //= 10

if original == reverse:
    print("Palindrome")
else:
    print("Not Palindrome")


# Question-32
n = abs(int(input("Enter a number: ")))
target = int(input("Enter target digit: "))
count = 0

for i in range(len(str(n))):
    if n % 10 == target:
        count += 1
    n //= 10

print(count)


# Question-33
n = int(input("Enter a positive integer: "))

for i in range(len(str(n))):
    if n < 10:
        break
    n //= 10

print(n)


# Question-34
n = abs(int(input("Enter a number: ")))
largest = 0
smallest = 9

for i in range(len(str(n))):
    digit = n % 10
    if digit > largest:
        largest = digit
    if digit < smallest:
        smallest = digit
    n //= 10

print(largest - smallest)


# Question-35
n = int(input("Enter a positive integer: "))
position = 1

for i in range(len(str(n))):
    print(n % 10, position)
    n //= 10
    position += 1


# Question-36
n = int(input("Enter a three-digit number: "))
original = n
total = 0

for i in range(3):
    digit = n % 10
    total += digit ** 3
    n //= 10

if total == original:
    print("Armstrong Number")
else:
    print("Not Armstrong Number")
