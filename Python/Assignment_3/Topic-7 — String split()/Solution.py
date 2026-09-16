# Topic-7 — String split()
# Q33 to Q41


# Q33 — Basic split()
text = "Python is easy"

print(text.split())

# Output:
# ['Python', 'is', 'easy']
# By default, split() separates words using whitespace (spaces).


# Q34 — Custom Separator
data = "apple,banana,mango"

print(data.split(","))

# Output:
# ['apple', 'banana', 'mango']


# Q35 — Separator Not Present
text = "Python is easy"

print(text.split(","))

# Output:
# ['Python is easy']
# It does not split at spaces because "," was specified as the separator.


# Q36 — Split a Full Name
name = input("Enter full name: ")

words = name.split()

for word in words:
    print(word)


# Q37 — Multiple Inputs Using split()
first_name, last_name = input("Enter first and last name: ").split()

print("First Name:", first_name)
print("Last Name:", last_name)


# Q38 — Three Numeric Inputs
a, b, c = input("Enter three numbers: ").split()

a = int(a)
b = int(b)
c = int(c)

print("Sum:", a + b + c)


# Q39 — Student Record
data = input("Enter student record: ")

name, age, course, city = data.split(",")

print("Name:", name)
print("Age:", age)
print("Course:", course)
print("City:", city)


# Q40 — Email Analyzer
email = input("Enter email: ")

username, domain = email.split("@")

print("Username:", username)
print("Domain:", domain)


# Q41 — Sentence Analyzer
sentence = input("Enter a sentence: ")

words = sentence.split()

print("First word:", words[0])
print("Last word:", words[-1])
print("Total words:", len(words))
