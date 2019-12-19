---
title: How to convert a string to int (integer) in C++
date: "2019-12-20"
tags: ['cpp','convert','integer','string']
template: post
---

To convert a string to int (integer) in c++, we can use the `stoi()` function by passing a string as an argument.

Here is an example that converts the string `pack` to an integer `90`.

```cpp{9}
#include <iostream>
#include <string>

using namespace std;

int main() {
 string pack = "90";

 int num1 = stoi(pack);

 cout << "string (\"" << pack << "\") is" << num1 << '\n';
}
```

