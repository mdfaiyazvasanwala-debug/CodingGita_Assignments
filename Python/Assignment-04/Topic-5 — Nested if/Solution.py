# Topic-5: Nested if

# Question-36.

username = input("Enter username: ")
password = input("Enter password: ")

if username == "admin":
    if password == "admin123":
        print("Login Successful")
    else:
        print("Wrong Password")
else:
    print("Invalid Username")


# Question-37. 

age = int(input("Enter age: "))
test_status = input("Enter test status: ")

if age >= 18:
    if test_status == "pass":
        print("License Approved")
    else:
        print("Test Not Passed")
else:
    print("Age Not Eligible")


# Question-38. 

balance = int(input("Enter account balance: "))
amount = int(input("Enter withdrawal amount: "))

if amount <= balance:
    if amount % 100 == 0:
        print("Withdrawal Successful")
    else:
        print("Enter Amount in Multiples of 100")
else:
    print("Insufficient Balance")


# Question-39. 

attendance = int(input("Enter attendance: "))
marks = int(input("Enter marks: "))

if attendance >= 75:
    if marks >= 40:
        print("Pass")
    else:
        print("Fail")
else:
    print("Not Eligible Due to Attendance")


# Question-40. 

account_type = input("Enter account type: ")
balance = int(input("Enter balance: "))

if account_type == "savings":
    if balance >= 1000:
        print("Minimum Balance Maintained")
    else:
        print("Minimum Balance Not Maintained")
else:
    print("Unsupported Account")


# Question-41. 

amount = int(input("Enter order amount: "))
payment = input("Enter payment method: ")

if amount >= 500:
    if payment == "card":
        print("Card Payment Accepted")
    elif payment == "upi":
        print("UPI Payment Accepted")
    else:
        print("Unsupported Payment Method")
else:
    print("Minimum Order Amount Not Reached")


# Question-42. 

year = int(input("Enter year of study: "))
attendance = int(input("Enter attendance: "))

if year >= 2 and year <= 4:
    if attendance >= 75:
        print("Room Eligible")
    else:
        print("Attendance Too Low")
else:
    print("Not Eligible by Year")


# Question-43. 

plan = input("Enter current plan: ")
usage = int(input("Enter monthly usage in GB: "))

if plan == "basic":
    if usage > 100:
        print("Recommend Upgrade")
    else:
        print("Basic Plan Is Sufficient")
else:
    print("Already on Higher Plan")
