# Topic-3 — Membership Operators with Strings
# Q7 to Q11


# Q7 — Basic Membership
text = "Python Programming"

print("Python" in text)
print("Java" in text)
print("Python" not in text)

# Output:
# True
# False
# False


# Q8 — Character Membership
word = "computer"

print("p" in word)
print("x" in word)
print("c" not in word)

# Output:
# True
# False
# False


# Q9 — Case Sensitivity in Membership
text = "Python"

print("P" in text)
print("p" in text)
print("Python" in text)
print("python" in text)

# Output:
# True
# False
# True
# False

# Membership checking is case-sensitive.
# Uppercase and lowercase characters are treated as different.


# Q10 — Membership with User Input
text = input("Enter a word or sentence: ")

print("a" in text)


# Q11 — Email Symbol Check
email = input("Enter your email: ")

print("@" in email)
