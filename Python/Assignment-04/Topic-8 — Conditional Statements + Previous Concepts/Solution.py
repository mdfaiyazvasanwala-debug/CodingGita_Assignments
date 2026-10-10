Topic-8 — Conditional Statements + Previous Concepts

# Question-58
student_id = input("Enter Student ID: ")
parts = student_id.split("-")

degree = parts[0]
batch = parts[1]
branch = parts[2]
roll_number = parts[3]

if branch == "CSE":
    print("CSE Student")
else:
    print("Non-CSE Student")


# Question-59
email = input("Enter email: ")
parts = email.split("@")
domain = parts[1]

if domain == "gmail.com":
    print("Gmail User")
else:
    print("Other Email Provider")


# Question-60
name = input("Enter full name: ")
parts = name.split()

username = parts[0].lower() + "." + parts[2].lower()

if "." in username:
    print("Valid Username Format")
else:
    print("Invalid Username Format")


# Question-61
num = int(input("Enter a positive integer: "))

if num < 10:
    print("One Digit")
elif num < 100:
    print("Two Digits")
elif num < 1000:
    print("Three Digits")
else:
    print("Four or More Digits")


# Question-62
price = float(input("Enter product price: "))
quantity = int(input("Enter quantity: "))

subtotal = price * quantity

if subtotal >= 5000:
    discount_percent = 20
elif subtotal >= 2000:
    discount_percent = 10
else:
    discount_percent = 0

discount = subtotal * discount_percent / 100
final_amount = subtotal - discount

print("Subtotal:", subtotal)
print("Discount:", str(discount_percent) + "%")
print("Final: {:.2f}".format(final_amount))


# Question-63
units = int(input("Enter units consumed: "))

if units <= 100:
    rate = 5
elif units <= 300:
    rate = 7
else:
    rate = 10

bill = units * rate

print("Units:", units)
print("Rate: ₹" + str(rate))
print("Bill: ₹" + str(bill))


# Question-64
balance = 10000

print("1. Check Balance")
print("2. Deposit")
print("3. Withdraw")
print("4. Exit")

choice = int(input("Enter choice: "))

match choice:
    case 1:
        print("Balance:", balance)

    case 2:
        amount = int(input("Enter deposit amount: "))
        balance += amount
        print("Deposit Successful, Balance:", balance)

    case 3:
        amount = int(input("Enter withdrawal amount: "))
        if amount <= balance:
            balance -= amount
            print("Withdrawal Successful, Balance:", balance)
        else:
            print("Insufficient Balance")

    case 4:
        print("Exit")

    case _:
        print("Invalid Choice")


# Question-65
print("1. Pizza - ₹250")
print("2. Burger - ₹150")
print("3. Pasta - ₹200")
print("4. Sandwich - ₹120")

choice = int(input("Enter food choice: "))
quantity = int(input("Enter quantity: "))

match choice:
    case 1:
        item_price = 250
    case 2:
        item_price = 150
    case 3:
        item_price = 200
    case 4:
        item_price = 120
    case _:
        item_price = 0
        print("Invalid Choice")

if item_price > 0:
    total = item_price * quantity

    if total >= 500:
        discount = total * 0.10
    else:
        discount = 0

    final_amount = total - discount

    print("Total:", total)
    print("Discount: {:.2f}".format(discount))
    print("Final: {:.2f}".format(final_amount))


# Question-66
m1 = int(input("Enter marks for subject 1: "))
m2 = int(input("Enter marks for subject 2: "))
m3 = int(input("Enter marks for subject 3: "))
attendance = int(input("Enter attendance percentage: "))

total = m1 + m2 + m3
average = total / 3

if attendance >= 75:
    if average >= 90:
        print("Outstanding")
    elif average >= 75:
        print("Very Good")
    elif average >= 60:
        print("Good")
    elif average >= 40:
        print("Pass")
    else:
        print("Fail")
else:
    print("Not Eligible")


# Question-67
distance = float(input("Enter distance in km: "))
ride_type = input("Enter ride type: ").lower()

match ride_type:
    case "normal":
        rate = 15
    case "premium":
        rate = 25
    case _:
        rate = 0
        print("Invalid Ride Type")

if rate > 0:
    fare = distance * rate

    if distance > 20:
        fare = fare + fare * 0.10

    print("Fare: {:.2f}".format(fare))


# Question-68
score = int(input("Enter entrance score: "))
percentage = float(input("Enter 12th percentage: "))
category = input("Enter category: ").lower()

match category:
    case "general":
        if score >= 80:
            if percentage >= 75:
                print("Admission Eligible")
            else:
                print("Admission Not Eligible")
        else:
            print("Admission Not Eligible")

    case "obc":
        if score >= 70:
            if percentage >= 70:
                print("Admission Eligible")
            else:
                print("Admission Not Eligible")
        else:
            print("Admission Not Eligible")

    case "sc":
        if score >= 60:
            if percentage >= 60:
                print("Admission Eligible")
            else:
                print("Admission Not Eligible")
        else:
            print("Admission Not Eligible")

    case _:
        print("Admission Not Eligible")
