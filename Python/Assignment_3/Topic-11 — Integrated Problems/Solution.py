# Topic-11 — Integrated Problems


# Q60. Student Result Information
name = input("Enter student name: ")
marks = input("Enter three marks: ").split()

m1 = int(marks[0])
m2 = int(marks[1])
m3 = int(marks[2])

total = m1 + m2 + m3
average = total / 3

print(f"Name: {name}")
print(f"Total: {total}")
print(f"Average: {average:.2f}")


# Q61. Student ID Analyzer
student_id = input("Enter Student ID: ")

parts = student_id.split("-")

degree = parts[0]
batch = parts[1]
branch = parts[2]
roll = int(parts[3])

last_three = student_id[-3:]

print(f"Degree: {degree}")
print(f"Batch: {batch}")
print(f"Branch: {branch}")
print(f"Roll Number: {roll}")


# Q62. Username Generator
full_name = input("Enter full name: ").split()

first_name = full_name[0]
last_name = full_name[2]

username = first_name.lower() + "." + last_name.lower()

print(username)


# Q63. Sentence Information
sentence = input("Enter a sentence: ")
words = sentence.split()

print(f"First word: {words[0]}")
print(f"Last word: {words[-1]}")
print(f"Number of words: {len(words)}")


# Q64. Email Analyzer + Membership
email = input("Enter email: ")

print(f"@ Present: {'@' in email}")

username, domain = email.split("@")

print(f"Username: {username}")
print(f"Domain: {domain}")


# Q65. Character Analyzer
character = input("Enter one character: ")

code = ord(character)
previous = chr(code - 1)
next_character = chr(code + 1)

print(f"Character: {character}")
print(f"Code: {code}")
print(f"Previous: {previous}")
print(f"Next: {next_character}")


# Q66. Product Bill
product = input("Enter product name: ")
price = float(input("Enter price: "))
quantity = int(input("Enter quantity: "))
discount_percentage = float(input("Enter discount percentage: "))

subtotal = price * quantity
discount = subtotal * discount_percentage / 100
final_total = subtotal - discount

print(f"Product: {product}")
print(f"Price: {price:.2f}")
print(f"Quantity: {quantity}")
print(f"Subtotal: {subtotal:.2f}")
print(f"Discount: {discount:.2f}")
print(f"Final Total: {final_total:.2f}")


# Q67. Date Analyzer
date = input("Enter date: ")

parts = date.split("-")

day = parts[0]
month = parts[1]
year = parts[2]

year_slice = date[-4:]

print(f"Day: {day}")
print(f"Month: {month}")
print(f"Year: {year}")
print(f"Year using slicing: {year_slice}")


# Q68. String Transformation Challenge
text = input("Enter two words: ")

words = text.split()

first_word = words[0]
second_word = words[1]

print(f"First Word: {first_word}")
print(f"Second Word: {second_word}")
print(f"First Word Reversed: {first_word[::-1]}")
print(f"Second Word Reversed: {second_word[::-1]}")


# Q69. Final Challenge — Student Code Formatter
student_code = input("Enter student code: ")

parts = student_code.split("-")

degree = parts[0]
batch = parts[1]
branch = parts[2]
roll = parts[3]

code = f"{degree}/{branch}/{roll}"

print(f"Degree: {degree}")
print(f"Batch: {batch}")
print(f"Branch: {branch}")
print(f"Roll: {roll}")
print(f"Code: {code}")


# Q70. Final String + Input/Output Challenge
full_name = input("Enter full name: ")

words = full_name.split()

first_name = words[0]
last_name = words[-1]

first_upper = first_name[:3].upper()
last_lower = last_name[1:4].lower()

reversed_name = full_name[::-1]

print(f"Original: {full_name}")
print(f"First Name: {first_name}")
print(f"Last Name: {last_name}")
print(f"First Name (Upper Part): {first_upper}")
print(f"Last Name (Lower Part): {last_lower}")
print(f"Full Name Reversed: {reversed_name}")
