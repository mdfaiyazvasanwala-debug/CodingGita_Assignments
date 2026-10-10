# Question-37
text = input("Enter a string: ")

for i in range(len(text)):
    print(i, text[i])


# Question-38
text = input("Enter a string: ")
count = 0

for ch in text:
    count += 1

print(count)


# Question-39
text = input("Enter a string: ")
vowels = "aeiouAEIOU"
vowel_count = 0
consonant_count = 0

for ch in text:
    if ch.isalpha():
        if ch in vowels:
            vowel_count += 1
        else:
            consonant_count += 1

print("Vowels =", vowel_count, "Consonants =", consonant_count)


# Question-40
text = input("Enter a string: ")
target = input("Enter target character: ")
count = 0

for ch in text:
    if ch == target:
        count += 1

print(count)


# Question-41
text = input("Enter a string: ")
target = input("Enter target character: ")
position = -1

for i in range(len(text)):
    if text[i] == target and position == -1:
        position = i

if position == -1:
    print("Not Found")
else:
    print(position)


# Question-42
text = input("Enter a string: ")
upper = 0
lower = 0

for ch in text:
    if ch.isupper():
        upper += 1
    elif ch.islower():
        lower += 1

print("Uppercase =", upper, "Lowercase =", lower)


# Question-43
text = input("Enter a string: ")

for ch in text:
    print(ch, ord(ch))


# Question-44
text = input("Enter a string: ")
vowels = "aeiouAEIOU"
result = ""

for ch in text:
    if ch not in vowels:
        result += ch

print(result)
