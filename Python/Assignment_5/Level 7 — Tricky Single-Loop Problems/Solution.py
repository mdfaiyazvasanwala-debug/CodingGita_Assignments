Level 7 — Tricky Single-Loop Problems

# Question-53
n = abs(int(input("Enter a number: ")))
largest = -1
second = -1

for i in range(n):
    if n == 0:
        break
    digit = n % 10

    if digit > largest:
        second = largest
        largest = digit
    elif digit < largest and digit > second:
        second = digit

    n //= 10

if second == -1:
    print("No second largest distinct digit")
else:
    print(second)


# Question-54
text = input("Enter a string: ")

current = 0
best = 0
previous = ""

for ch in text:
    if ch == previous:
        current += 1
    else:
        current = 1
        previous = ch

    if current > best:
        best = current

print(best)


# Question-55
text = input("Enter a string: ")
target = input("Enter target character: ")
count = 0
length = 0

for ch in text:
    length += 1
    if ch == target:
        count += 1

if length > 0:
    frequency = count / length * 100
else:
    frequency = 0

print("Count =", count)
print("Frequency = {:.2f}%".format(frequency))


# Question-56
n = int(input("Enter a positive integer: "))
total = 0

for i in range(n):
    if n == 0:
        break
    total += n % 10
    print(total)
    n //= 10


# Question-57
n = int(input("Enter a positive integer: "))
even = 0
odd = 0

for i in range(n):
    if n == 0:
        break

    digit = n % 10

    if digit % 2 == 0:
        even += 1
    else:
        odd += 1

    n //= 10

if even > odd:
    print("More Even Digits")
elif odd > even:
    print("More Odd Digits")
else:
    print("Equal")


# Question-58
n = int(input("Enter a positive integer: "))
total = 0
sign = 1

for i in range(n):
    if n == 0:
        break

    digit = n % 10
    total += digit * sign
    sign *= -1
    n //= 10

print(total)


# Question-59
total = 0

for i in range(1, 6):
    total = total + i * 2
    print(total)


# Question-60
count = 0

for i in range(1, 11):
    if i % 2 == 0:
        count += 1

print(count)


# Question-61
total = 0

for i in range(1, 6):
    total += i

print(total)


# Question-62
n = int(input("Enter number of days: "))
total = 0
highest = None
lowest = None

for i in range(n):
    expense = float(input("Enter expense: "))
    total += expense

    if highest is None or expense > highest:
        highest = expense
    if lowest is None or expense < lowest:
        lowest = expense

print("Total:", total)
print("Highest:", highest)
print("Lowest:", lowest)


# Question-63
n = int(input("Enter number of subjects: "))
total = 0
highest = None
lowest = None

for i in range(n):
    marks = float(input("Enter marks: "))
    total += marks

    if highest is None or marks > highest:
        highest = marks
    if lowest is None or marks < lowest:
        lowest = marks

if n > 0:
    print("Total:", total)
    print("Average:", total / n)
    print("Highest:", highest)
    print("Lowest:", lowest)


# Question-64
n = int(input("Enter working days: "))
present = 0
absent = 0

for i in range(n):
    status = input("Enter P or A: ").upper()

    if status == "P":
        present += 1
    elif status == "A":
        absent += 1

if n > 0:
    attendance = present / n * 100
else:
    attendance = 0

print("Present:", present)
print("Absent:", absent)
print("Attendance: {:.2f}%".format(attendance))


# Question-65
n = int(input("Enter number of days: "))
total = 0
days_above = 0

for i in range(n):
    units = int(input("Enter units: "))
    total += units

    if units > 10:
        days_above += 1

print("Total Units:", total)
print("Days Above 10:", days_above)


# Question-66
n = int(input("Enter number of products: "))
total = 0
count = 0

for i in range(n):
    price = float(input("Enter price: "))
    total += price

    if price > 1000:
        count += 1

print("Total Bill:", total)
print("Products Above 1000:", count)


# Question-67
n = int(input("Enter number of attempts: "))
successful = 0
failed = 0

for i in range(n):
    status = input("Enter success or failed: ").lower()

    if status == "success":
        successful += 1
    elif status == "failed":
        failed += 1

if n > 0:
    rate = successful / n * 100
else:
    rate = 0

print("Successful:", successful)
print("Failed:", failed)
print("Success Rate:", rate, "%")
