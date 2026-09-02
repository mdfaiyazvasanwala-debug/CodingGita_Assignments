# Topic 6: Output Prediction and Conceptual Practice
# Questions 51-55


# Q51 — Type Casting Output
a = "50"
b = int(a)

print(a)
print(b)
print(type(a))
print(type(b))

# Output:
# 50
# 50
# <class 'str'>
# <class 'int'>


# Q52 — Float to Integer
number = 99.99
result = int(number)

print(number)
print(result)

# Output:
# 99.99
# 99
# The decimal portion (.99) is removed when converting
# the float to an integer.


# Q53 — Arithmetic Output
a = 12
b = 5

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a % b)

# Output:
# 17
# 7
# 60
# 2.4
# 2
# 2


# Q54 — Parentheses Challenge
print(10 + 5 * 2)
print((10 + 5) * 2)
print(20 / 5 + 3)
print(20 / (5 + 3))

# Output:
# 20
# 30
# 7.0
# 2.5
#
# Parentheses change the order of calculation.
# Without parentheses, multiplication/division happens first.
# With parentheses, the expression inside them is calculated first.


# Q55 — Digit Challenge
number = 684

a = number % 10
b = number // 10
c = b % 10
d = number // 100

print(a)
print(c)
print(d)

# Output:
# 4
# 8
# 6
#
# a = Ones digit
# c = Tens digit
# d = Hundreds digit