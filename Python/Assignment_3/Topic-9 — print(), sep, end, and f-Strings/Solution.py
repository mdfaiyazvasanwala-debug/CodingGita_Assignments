# Topic-9 — print(), sep, end, and f-Strings

# Q49. sep
print("2026", "09", "09", sep="-")
# Output: 2026-09-09


# Q50. end
print("Hello", end=" ")
print("Python")
# Output: Hello Python


# Q51. sep and end
print(10, 20, 30, sep="-", end="\n")
print(40, 50, 60, sep="-")


# Q52. Student Introduction
name = input("Enter name: ")
age = input("Enter age: ")
city = input("Enter city: ")
course = input("Enter course: ")

print(f"Name: {name}")
print(f"Age: {age}")
print(f"City: {city}")
print(f"Course: {course}")


# Q53. Formatted Price
price = float(input("Enter price: "))
print(f"{price:.2f}")
