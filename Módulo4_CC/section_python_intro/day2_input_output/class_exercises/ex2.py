import sys

numbers = input("Please, type a sequence of numbers separated by spaces: ")
numbers_arr = numbers.split()
sum = 0

for number in numbers_arr:
    if number.isdigit() is False:
        err = f"'{number}' is not a number"
        print(f"An error has ocurred: {err}", file=sys.stderr)
    else:
        sum += int(number)

print("Sum:", sum)
