# Topic 3: Digit Extraction using % and //
# Questions 21-35


# Q21 — Ones Digit
number = 583
ones = number % 10

print("Ones Digit:", ones)


# Q22 — Tens Digit
number = 583
tens = (number // 10) % 10

print("Tens Digit:", tens)


# Q23 — Hundreds Digit
number = 583
hundreds = (number // 100) % 10

print("Hundreds Digit:", hundreds)


# Q24 — Three-Digit Number Analyzer
number = 746

ones = number % 10
tens = (number // 10) % 10
hundreds = (number // 100) % 10

print("Ones Digit:", ones)
print("Tens Digit:", tens)
print("Hundreds Digit:", hundreds)


# Q25 — Four-Digit Number
number = 5829

ones = number % 10
tens = (number // 10) % 10
hundreds = (number // 100) % 10
thousands = (number // 1000) % 10

print("Ones Digit:", ones)
print("Tens Digit:", tens)
print("Hundreds Digit:", hundreds)
print("Thousands Digit:", thousands)


# Q26 — Sum of Digits
number = 583

ones = number % 10
tens = (number // 10) % 10
hundreds = (number // 100) % 10

sum_digits = ones + tens + hundreds

print("Sum of Digits:", sum_digits)


# Q27 — Four-Digit Sum
number = 4726

ones = number % 10
tens = (number // 10) % 10
hundreds = (number // 100) % 10
thousands = (number // 1000) % 10

sum_digits = ones + tens + hundreds + thousands

print("Sum of Digits:", sum_digits)


# Q28 — Product of Digits
number = 234

ones = number % 10
tens = (number // 10) % 10
hundreds = (number // 100) % 10

product = ones * tens * hundreds

print("Product of Digits:", product)


# Q29 — Reverse a Three-Digit Number
number = 583

ones = number % 10
tens = (number // 10) % 10
hundreds = number // 100

reversed_number = ones * 100 + tens * 10 + hundreds

print("Original Number:", number)
print("Reversed Number:", reversed_number)


# Q30 — Reverse a Four-Digit Number
number = 4726

ones = number % 10
tens = (number // 10) % 10
hundreds = (number // 100) % 10
thousands = number // 1000

reversed_number = ones * 1000 + tens * 100 + hundreds * 10 + thousands

print("Original Number:", number)
print("Reversed Number:", reversed_number)


# Q31 — Place Value
number = 5834

thousands = (number // 1000) % 10
hundreds = (number // 100) % 10
tens = (number // 10) % 10
ones = number % 10

print("Thousands Place:", thousands * 1000)
print("Hundreds Place:", hundreds * 100)
print("Tens Place:", tens * 10)
print("Ones Place:", ones)


# Q32 — Difference Between First and Last Digit
number = 583

hundreds = (number // 100) % 10
ones = number % 10

difference = hundreds - ones

print("Difference:", difference)


# Q33 — Digit Extraction Debugging
number = 583

# Correct: % 10 gives the ones digit
ones = number % 10

print("Ones Digit:", ones)


# Q34 — Four-Digit Extraction
number = 9365

thousands = (number // 1000) % 10
hundreds = (number // 100) % 10
tens = (number // 10) % 10
ones = number % 10

print("Thousands Digit:", thousands)
print("Hundreds Digit:", hundreds)
print("Tens Digit:", tens)
print("Ones Digit:", ones)


# Q35 — Build a Number
hundreds = 5
tens = 8
ones = 3

number = hundreds * 100 + tens * 10 + ones

print("Number:", number)