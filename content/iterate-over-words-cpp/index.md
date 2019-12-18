---
title: How to iterate over the words of a string in C++
date: "2019-12-19"
tags: ['cpp','iterate','loop','string','words']
template: post
---

We are using the `stringstream` approach to iterate over the words of a string and separated by the white spaces.

```cpp
#include <iostream>

using namespace std;

#include <vector>
#include <string>
#include <sstream>

int main()
{
 std::string str("How are you c++");
 std::string word; // Have a each word
 std::stringstream ss(str); // Insert the string into a stream

 std::vector<std::string> tokens; // Create vector to hold our words

 while (ss >> word)
 cout << word << endl; // printing the each word
 tokens.push_back(word);

 return 0;
}
```

Output:

```cpp
How
are
you
C++
```
