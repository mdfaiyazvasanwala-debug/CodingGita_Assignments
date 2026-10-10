# Question-71
marks = 85

if marks >= 40:
    print("Pass")
elif marks >= 75:
    print("Very Good")
else:
    print("Fail")

# Output: Pass



# Question-72
marks = int(input("Enter marks: "))

if marks >= 90:
    print("A")
elif marks >= 75:
    print("B")
elif marks >= 40:
    print("Pass")
else:
    print("Fail")

# Outputs:
# 95 -> A
# 85 -> B
# 50 -> Pass
# 30 -> Fail



# Question-73
age = 20
has_id = True

if age >= 18:
    if has_id:
        print("Entry Allowed")
    else:
        print("ID Required")
else:
    print("Underage")

# Output: Entry Allowed

# If age = 20 and has_id = False:
# Output: ID Required

# If age = 16 and has_id = True:
# Output: Underage


# Question-74
choice = 5

match choice:
    case 1:
        print("Add")
    case 2:
        print("View")
    case 3:
        print("Delete")
    case _:
        print("Invalid Choice")

# Outputs:
# 1 -> Add
# 3 -> Delete
# 5 -> Invalid Choice



# Question-75
marks = 82
attendance = 80

if attendance >= 75:
    if marks >= 90:
        print("Grade A")
    elif marks >= 75:
        print("Grade B")
    elif marks >= 40:
        print("Pass")
    else:
        print("Fail")
else:
    print("Not Eligible")

# Outputs:
# 82 80 -> Grade B
# 92 80 -> Grade A
# 55 80 -> Pass
# 92 60 -> Not Eligible

