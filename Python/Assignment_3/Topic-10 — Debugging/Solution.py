# Topic-10 — Debugging

# Q54. String and Integer
age = int(input("Enter age: "))
print("Age after 5 years:", age + 5)


# Q55. Incorrect Quotes
print("It's Python")


# Q56. Incorrect Slicing Syntax
text = "Python"
print(text[1:4])


# Q57. Incorrect split() Separator
# The input uses a space, but split(",") expects a comma.
a, b = input().split()
print(a, b)


# Q58. String Addition vs Numeric Addition
a, b = input().split()

# Original program prints: 1020
print(a + b)

# Numeric addition
a = int(a)
b = int(b)
print(a + b)


# Q59. Escape Sequence Debugging
# \n means new line and \t means tab.
# Use double backslashes to display actual backslashes.
print("C:\\new\\test")
