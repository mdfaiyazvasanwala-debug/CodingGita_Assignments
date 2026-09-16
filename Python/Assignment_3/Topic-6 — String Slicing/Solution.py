# Topic-6 — String Slicing
# Q24 to Q32


# Q24 — Basic Slicing
text = "PYTHON"

print(text[0:3])
print(text[2:5])
print(text[1:6])

# Output:
# PYT
# THO
# YTHON


# Q25 — Start and Stop
text = "PROGRAMMING"

print(text[:4])
print(text[4:])
print(text[:])

# Output:
# PROG
# RAMMING
# PROGRAMMING


# Q26 — Negative Slicing
text = "COMPUTER"

print(text[-5:])
print(text[:-3])
print(text[-6:-2])

# Output:
# PUTER
# COMPU
# MPUT


# Q27 — Step in Slicing
text = "PYTHON"

print(text[::2])
print(text[1::2])
print(text[::-1])

# Output:
# PTO
# YHN
# NOHTYP


# Q28 — Reverse a String
text = input("Enter a string: ")

print(text[::-1])


# Q29 — Alternate Characters
text = input("Enter a string: ")

print(text[::2])


# Q30 — Extract First and Last Three Characters
text = input("Enter a string: ")

print("First Three:", text[:3])
print("Last Three:", text[-3:])


# Q31 — Slicing Challenge
text = "ABCDEFGHIJ"

print(text[2:8:2])
print(text[8:2:-2])
print(text[::-2])

# Output:
# CE G -> CEG
# IGE
# JHFDB
#
# text[2:8:2]
# Start = 2
# Stop = 8
# Step = 2
#
# text[8:2:-2]
# Start = 8
# Stop = 2
# Step = -2
#
# text[::-2]
# Start = beginning (default)
# Stop = end (default)
# Step = -2


# Q32 — Slice Without Counting from the Beginning
text = "BTECH-CSE-2026"

btech = text[:5]
cse = text[6:9]
year = text[10:]

print("BTECH:", btech)
print("CSE:", cse)
print("2026:", year)
