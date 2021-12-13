# Numbers

An website that you place an expression on the box, and if a number on the table corresponds,
its background become gray.

## Example

Place on the box `i % 2 != 0`, it´ll color only odd numbers; same with `i % 2 == 0` that colors
even numbers.

## The "i"

'i' is a variable that represents the number that is being iterated (Because runs a for loop
on all numbers).

## How to use

1. Insert the expression on the box.
2. Click on [Go] button.

Below has some buttons that resets the table and the expression box.

## How it works

The heart of Numbers is the JavaScript native function eval(). <br />
Runs a for loop on all the 100 numbers, and if the number (represented by 'i' variable) returns
true to the expression its background become gray.
