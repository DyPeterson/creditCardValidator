```javascript
# Specs
Test
Describe: doubleDigit()

Test: "Doubling one digit"
Code: doubleDigit("4")
Expected Output: 8

Test: "Doubling all digits"
Code: doubleDigit("43311235")
Expected Output: 866224610

Test: "Doubling every other digit"
Code: doubleDigit("43311235")
Expected Output: 463214310


Describe: addDigits()

Test: "Add a 2 Digit number together"
Code: addDigits("12")
Expected Output: 3

Test: "Add a 12 Digit number together"
Code: addDigits("4204070780465320")
Expected Output: 52

Describe validateNumber()

Test: "Verifies a number ends in 0"
Code: validateNumber(0)
Expected Output: True

Test: "Verifies a multiple digit number ends in 0"
Code: validateNumber(230)
Expected Output: True

Test: "Verifies a multiple digit number ends in 0"
Code: validateNumber(231)
Expected Output: False

Describe firstDigit()

test: "Check if string starts with 4,5 or 6"
Code: firstDigit(4056)
Expected Output: True

test: "Check if string's first two digits start with 34 or 37"
code: firstDigit(3799)
expected Output: True

Describe: validateLength()

test: "Return the length of a number"
code: validateLength(3799)
expected Output: 4

test: "If number is longer than 17 return false"
code: validateLength(37993799379937991)
expected Output: false

test: "If number's length is 15 return american express"
code: validateLength(379937993799)
expected Output: american express

test: "If number's length is 16 return visa mastercard or discover"
code: validateLength(3799379937991)
expected Output: visa, mastercard, or discover
```
