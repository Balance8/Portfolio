leftShift

Difficulty: Basic

Prompt

Write a function called leftShift that accepts a binary number and a base-10 number (denoted by n) as arguments, shifts the binary number n bits to the left and returns the resulting number in base-10 form. When we shift left we add n 0's to the right of our binary number.

In JavaScript we can denote a binary number by using the 0b prefix and then writing the actual sequence of 1's and 0's that make up the binary number after it.

```
0b10101 //=> Refers to the binary number 10101
```

This is the left shift operator: <<. Here is it in use:

```
0b101 << 1 //=> 0b1010
```

This operator shifts the first operand the specified number of bits to the left by adding 0's the number's right.

To better understand what quantity a binary number represents lets convert the number 0b101 to decimal since we are all more familiar conceptualizing decimal numbers than binary numbers:

1 × 22 + 0 × 21 + 1 × 21 = 5 (in decimal)

How to convert a binary number to base-10 can be learned here: https://www.wikihow.com/Convert-from-Binary-to-Decimal.

The formula above, takes a bit string and converts it to a decimal number.

Examples

```
leftShift(0b101, 2) //=> 20
leftShift(0b10, 1) //=> 4
```
