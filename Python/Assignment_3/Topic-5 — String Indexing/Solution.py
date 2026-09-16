# Topic-5 — String Indexing
# Q19 to Q23


# Q19 — Basic Indexing
text = "PYTHON"

print("First Character:", text[0])
print("Second Character:", text[1])
print("Last Character:", text[-1])
print("Second-Last Character:", text[-2])


# Q20 — Positive and Negative Indexing
text = "COMPUTER"

print("Index 0:", text[0])
print("Index 3:", text[3])
print("Index -1:", text[-1])
print("Index -3:", text[-3])


# Q21 — Predict the Output
text = "PYTHON"

print(text[0])
print(text[2])
print(text[-1])
print(text[-2])

# Output:
# P
# T
# N
# O


# Q22 — Indexing a User Input
word = input("Enter a word: ")

print("First Character:", word[0])
print("Last Character:", word[-1])


# Q23 — Think Carefully About Indexing
word = "PROGRAM"

print("word[0]:", word[0])
print("word[2]:", word[2])
print("word[-1]:", word[-1])
print("word[-4]:", word[-4])

# Output:
# word[0]: P
# word[2]: O
# word[-1]: M
# word[-4]: G
