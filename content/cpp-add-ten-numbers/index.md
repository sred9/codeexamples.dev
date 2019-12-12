---
title: C++ program to calculate sum of 10 numbers
date: "2019-12-13"
tags: ['cpp','numbers']
template: post
---

In this example, you will learn about how to calculate the sum of 10 numbers in C++.

The program takes the first 10 numbers from the user and returns the sum of it.

```cpp
#include <iostream>
using namespace std;

int main()
{
   int num, sum=0;

   cout<<"Please enter 10 numbers:"<<endl;

  for(int i=0; i<10; i++)
  {
   // input is stored in num
    cin>>num;

   // adding 10 numbers
    sum=sum+num;
  }
     cout << "\n The sum of first 10 numbers is: "<<sum << endl;
     return 0;
}
```
