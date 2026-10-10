Level 8 — Real-Life Single-Loop Problems

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

attendance = present / n * 100 if n > 0 else 0

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

rate = successful / n * 100 if n > 0 else 0

print("Successful:", successful)
print("Failed:", failed)
print("Success Rate: {:.1f}%".format(rate))
