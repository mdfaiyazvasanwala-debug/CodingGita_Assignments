Level 9 — Final Challenges

# Question-68
n = int(input("Enter a positive integer: "))
digits = 0
total = 0
largest = 0
smallest = 9
even = 0
odd = 0

for i in range(n):
    if n == 0:
        break

    digit = n % 10
    digits += 1
    total += digit

    if digit > largest:
        largest = digit
    if digit < smallest:
        smallest = digit

    if digit % 2 == 0:
        even += 1
    else:
        odd += 1

    n //= 10

print("Digits:", digits)
print("Sum:", total)
print("Largest:", largest)
print("Smallest:", smallest)
print("Even Digits:", even)
print("Odd Digits:", odd)


# Question-69
text = input("Enter a string: ")
vowels = "aeiouAEIOU"

total = 0
vowel_count = 0
consonants = 0
uppercase = 0
lowercase = 0
even_index = 0

for i in range(len(text)):
    ch = text[i]
    total += 1

    if i % 2 == 0:
        even_index += 1

    if ch.isalpha():
        if ch in vowels:
            vowel_count += 1
        else:
            consonants += 1

        if ch.isupper():
            uppercase += 1
        elif ch.islower():
            lowercase += 1

print("Total Characters:", total)
print("Vowels:", vowel_count)
print("Consonants:", consonants)
print("Uppercase:", uppercase)
print("Lowercase:", lowercase)
print("Even Index Characters:", even_index)
