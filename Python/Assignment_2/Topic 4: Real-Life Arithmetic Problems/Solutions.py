# Topic 4: Real-Life Arithmetic Problems
# Questions 36-44


# Q36 — Simple Interest
principal = 10000
rate = 5
time = 2

simple_interest = (principal * rate * time) / 100

print("Simple Interest:", simple_interest)


# Q37 — Rectangle
length = 15
width = 8

area = length * width
perimeter = 2 * (length + width)

print("Area:", area, "cm")
print("Perimeter:", perimeter, "cm")


# Q38 — Circle
radius = 7
pi = 3.14

area = pi * radius ** 2

print("Area of Circle:", area, "cm²")


# Q39 — Temperature Conversion
celsius = 35

fahrenheit = (celsius * 9 / 5) + 32

print("Fahrenheit:", fahrenheit)


# Q40 — Time Conversion
total_seconds = 367

minutes = total_seconds // 60
seconds = total_seconds % 60

print("Minutes:", minutes)
print("Seconds:", seconds)


# Q41 — Hours, Minutes and Seconds
total_seconds = 7384

hours = total_seconds // 3600
remaining_seconds = total_seconds % 3600
minutes = remaining_seconds // 60
seconds = remaining_seconds % 60

print("Hours:", hours)
print("Minutes:", minutes)
print("Seconds:", seconds)


# Q42 — Salary Calculation
basic_salary = 25000
hra = 5000
travel_allowance = 2500
tax = 3000

gross_salary = basic_salary + hra + travel_allowance
net_salary = gross_salary - tax

print("Gross Salary:", gross_salary)
print("Net Salary:", net_salary)


# Q43 — Travel Cost
distance = 120
mileage = 20
fuel_price = 100

fuel_required = distance / mileage
total_fuel_cost = fuel_required * fuel_price

print("Fuel Required:", fuel_required, "litres")
print("Total Fuel Cost:", total_fuel_cost)


# Q44 — Shopping Discount
price = "2500"
discount = "10"

price = float(price)
discount = float(discount)

discount_amount = (price * discount) / 100
final_price = price - discount_amount

print("Discount Amount:", discount_amount)
print("Final Price:", final_price)