---
title: How to remove a character from a Python String
date: "2020-01-30"
tags: ['python','remove','character','string']
template: post
---

Strings are immutable in python so that we can use the `replace()` method which returns the copy of the original string by removing the specified characters.

Here is an example that removes the character `f` from a given string.

```python
string = "Hello f world"
newStr = string.replace("f", "")

print(newStr) # Hello world
```
