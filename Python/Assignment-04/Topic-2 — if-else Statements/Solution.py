Topic-2 — if-else Statements


# Q9. Even or Odd

num = int(input("Enter an integer: "))

if num % 2 == 0:
    print("Even")
else:
    print("Odd")


# Q10. Pass or Fail

marks = int(input("Enter marks: "))

if marks >= 40:
    print("Pass")
else:
    print("Fail")


# Q11. Adult or Minor

age = int(input("Enter age: "))

if age >= 18:
    print("Adult")
else:
    print("Minor")


# Q12. Number Sign

num = int(input("Enter an integer: "))

if num > 0:
    print("Positive")
else:
    print("Non-Positive")


# Q13. Divisible by 3

num = int(input("Enter an integer: "))

if num % 3 == 0:
    print("Divisible by 3")
else:
    print("Not Divisible by 3")


# Q14. Login Password

correct_password = "python123"
password = input("Enter password: ")

if password == correct_password:
    print("Login Successful")
else:
    print("Invalid Password")


# Q15. Username Check

username = input("Enter username: ")

if username == "admin":
    print("Welcome Admin")
else:
    print("Invalid Username")


# Q16. Greater Between Two Numbers

a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

if a > b:
    print(a)
elif b > a:
    print(b)
else:
    print("Both are Equal")


# Q17. Hot or Comfortable

temperature = int(input("Enter temperature: "))

if temperature > 30:
    print("Hot")
else:
    print("Comfortable")


# Q18. Shopping Discount Eligibility

amount = int(input("Enter shopping amount: "))

if amount >= 5000:
    print("Discount Available")
else:
    print("No Discount")
