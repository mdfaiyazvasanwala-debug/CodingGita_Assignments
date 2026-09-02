# Topic 1: Type Casting
# Questions 1-10


# Q1. Convert age from string to integer
age = "25"
age = int(age)

print(age)
print(type(age))


# Q2. Convert marks from string to float
marks = "75.5"
marks = float(marks)

print(marks)
print(type(marks))


# Q3. Convert integer to float
number = 50
number = float(number)

print(number)
print(type(number))


# Q4. Convert float to integer
marks = 85.9
marks = int(marks)

print(marks)
print(type(marks))


# Q5. Convert roll number from integer to string
roll_number = 101
roll_number = str(roll_number)

print(roll_number)
print(type(roll_number))


# Q6. Multiple type conversions
a = "100"
b = 25
c = 12.5

a = int(a)
b = float(b)
c = str(c)

print(a, type(a))
print(b, type(b))
print(c, type(c))


# Q7. Predict the output
age = "20"
number = 10
roll_number = 25

age = int(age)
roll_number = str(roll_number)

print(age)
print(number)
print(roll_number)

print(type(age))
print(type(number))
print(type(roll_number))


# Q8. Fix the type error
age = "19"

age = int(age)
age = age + 1

print(age)


# Q9. Convert marks to integer and add 5
marks = "85"

marks = int(marks)
marks = marks + 5

print(marks)


# Q10. Convert price to float and add 99.50
price = "1499.50"

price = float(price)
price = price + 99.50

print(price)