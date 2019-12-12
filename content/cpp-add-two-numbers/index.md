---
title: How to add two numbers in C++
date: "2019-12-13"
tags: ['cpp','numbers']
template: post
---

Here is an example program, where it takes the input of a first number and the second number then it returns the sum.

```cpp
#include <iostream>
using namespace std;

int main()
{
   int firstNumber, secondNumber, sum;

   cout << "Enter two integers to add\n";
    // taking input
   cin >> firstNumber >> secondNumber;

    // adding two numbers
   sum = firstNumber + secondNumber;

   // displaying sum
   cout <<"Sum of the numbers: " << sum << endl;
   return 0;
}
```
