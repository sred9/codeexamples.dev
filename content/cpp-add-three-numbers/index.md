---
title: C++ program to add three numbers
date: "2019-12-13"
tags: ['cpp','numbers']
template: post
---

Here is an example program of how to add three numbers in c++.

```cpp
#include <iostream>
using namespace std;

int main()
{
   int firstNumber, secondNumber, thirdNumber, sum;

   cout << "Enter three integers to add\n";

    // taking input of three numbers
   cin >> firstNumber >> secondNumber >> thirdNumber;

    // adding three numbers
   sum = firstNumber + secondNumber + thirdNumber ;

   // displaying sum
   cout <<"Sum of three numbers is: " << sum << endl;
   return 0;
}
```
