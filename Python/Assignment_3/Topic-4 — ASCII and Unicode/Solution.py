# Topic-4 — ASCII and Unicode
# Q12 to Q18


# Q12 — Find Character Codes
print(ord("A"))
print(ord("a"))
print(ord("Z"))
print(ord("z"))
print(ord("0"))
print(ord("9"))
print(ord("@"))

# Output:
# 65
# 97
# 90
# 122
# 48
# 57
# 64


# Q13 — Convert Codes to Characters
print(chr(65))
print(chr(66))
print(chr(97))
print(chr(98))
print(chr(48))
print(chr(57))
print(chr(64))

# Output:
# A
# B
# a
# b
# 0
# 9
# @


# Q14 — Uppercase and Lowercase
print(ord("A"))
print(ord("a"))
print(ord("B"))
print(ord("b"))

# A = 65, a = 97
# B = 66, b = 98
#
# 1. ord("a") is larger than ord("A")
# 2. Difference = 97 - 65 = 32
# 3. Yes, the difference is also 32 for B and b.


# Q15 — Character Code Program
character = input("Enter a character: ")

print(ord(character))


# Q16 — Next Character
character = input("Enter an uppercase letter: ")

next_character = chr(ord(character) + 1)

print(next_character)


# Q17 — Character Comparison and Unicode
print("A" < "B")
print("a" < "b")
print("A" < "a")
print("0" < "9")

# Output:
# True
# True
# True
# True
#
# Unicode values:
# A = 65, B = 66
# a = 97, b = 98
# 0 = 48, 9 = 57


# Q18 — Unicode Character Challenge
print(chr(9731))
print(chr(9829))
print(chr(8377))

# Output:
# ☃
# ♥
# ₹

# Verify using ord()
print(ord("☃"))
print(ord("♥"))
print(ord("₹"))

# Output:
# 9731
# 9829
# 8377
