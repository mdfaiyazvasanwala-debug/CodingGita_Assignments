# Topic 7: Mixed Debugging
# Questions 56-60


# Q56 — Debug the Student Program
student_name = "Ravi"
marks = "85"

marks = int(marks)
total = marks + 5

print("Student:", student_name)
print("Marks:", total)
print("Type:", type(total))


# Q57 — Debug the Number Program
number = 746

ones = number % 10
tens = (number // 10) % 10
hundreds = number // 100

print("Ones:", ones)
print("Tens:", tens)
print("Hundreds:", hundreds)


# Q58 — Debug the Discount Program
price = "2000"
discount = "15"

price = float(price)
discount = float(discount)

discount_amount = price * discount / 100
final_price = price - discount_amount

print("Discount:", discount_amount)
print("Final Price:", final_price)


# Q59 — Complete Debugging Challenge
student_name = "Rahul"
marks1 = "85"
marks2 = "90"
marks3 = "78"

marks1 = int(marks1)
marks2 = int(marks2)
marks3 = int(marks3)

total = marks1 + marks2 + marks3
average = total / 3

print("Student:", student_name)
print("Total Marks:", total)
print("Average:", average)
print("Marks Type:", type(total))


# Q60 — Final Challenge: Number + Billing

# Part A — Number Analysis
number = 5836

thousands = (number // 1000) % 10
hundreds = (number // 100) % 10
tens = (number // 10) % 10
ones = number % 10

sum_digits = thousands + hundreds + tens + ones

reversed_number = (
    ones * 1000
    + tens * 100
    + hundreds * 10
    + thousands
)

print("Thousands Digit:", thousands)
print("Hundreds Digit:", hundreds)
print("Tens Digit:", tens)
print("Ones Digit:", ones)
print("Sum of Digits:", sum_digits)
print("Reversed Number:", reversed_number)


# Part B — Product Billing
price = "1250"
quantity = "4"
discount = "10"

price = float(price)
quantity = int(quantity)
discount = float(discount)

subtotal = price * quantity
discount_amount = subtotal * discount / 100
final_amount = subtotal - discount_amount

print("Subtotal:", subtotal)
print("Discount Amount:", discount_amount)
print("Final Amount:", final_amount)