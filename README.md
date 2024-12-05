# TypeScript Type Error: Argument of type 'string' is not assignable to parameter of type 'number'

This repository demonstrates a common type error in TypeScript and its solution.

## Bug
The `add` function is defined to accept two numbers and return their sum. However, in the example usage, a string ('2') is passed as an argument, resulting in a type error.

## Solution
The solution involves type checking or type assertion to ensure that the arguments passed to the `add` function are of the correct type.