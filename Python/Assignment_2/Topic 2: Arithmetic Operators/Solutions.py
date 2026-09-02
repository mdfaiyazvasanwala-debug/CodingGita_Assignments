# Topic 2: Arithmetic Operators
# Questions 11-20


# Q11 — Basic Arithmetic
a = 20
b = 6

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)
print("Floor Division:", a // b)
print("Remainder:", a % b)
print("Power:", a ** b)


# Q12 — Predict the Output
a = 17
b = 5

print(a / b)
print(a // b)
print(a % b)

# / gives normal division, // gives the whole-number quotient,
# and % gives the remainder.


# Q13 — Operator Precedence
result = 10 + 5 * 2
print(result)

# Addition first
result = (10 + 5) * 2
print(result)


# Q14 — More Precedence Practice
result = 20 - 4 * 3 + 2
print(result)

# Using parentheses to make the order clear
result = 20 - (4 * 3) + 2
print(result)


# Q15 — Power Operator
print(2 ** 3)
print(3 ** 2)
print(10 ** 2)

side = 5
area = side ** 2
print("Area of Square:", area)


# Q16 — Shopping Bill
notebook = 80
pen = 20
pencil = 10

total = notebook + pen + pencil

print("Total Amount:", total)


# Q17 — Multiple Quantities
notebook_cost = 3 * 50
pen_cost = 2 * 15
calculator_cost = 1 * 500

total_bill = notebook_cost + pen_cost + calculator_cost

print("Notebook Cost:", notebook_cost)
print("Pen Cost:", pen_cost)
print("Calculator Cost:", calculator_cost)
print("Total Bill:", total_bill)


# Q18 — Complete Groups and Remainder
students = 47
group_size = 5

complete_groups = students // group_size
students_left = students % group_size

print("Complete Groups:", complete_groups)
print("Students Left:", students_left)


# Q19 — Average Marks
python = 85
mathematics = 78
physics = 92

total_marks = python + mathematics + physics
average_marks = total_marks / 3

print("Total Marks:", total_marks)
print("Average Marks:", average_marks)


# Q20 — Percentage
english = 78
mathematics = 85
python = 92
physics = 81
chemistry = 74

total_marks = english + mathematics + python + physics + chemistry
percentage = (total_marks / 500) * 100

print("Total Marks:", total_marks)
print("Percentage:", percentage)