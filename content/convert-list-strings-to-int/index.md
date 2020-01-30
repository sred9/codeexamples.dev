---
title: How to convert a list of strings to Integers in Python
date: "2020-01-30"
tags: ['python','list','strings','int']
template: post
---

To convert a list of strings into integers, we can use the `map()` function in python.

Here is an example

```python
stringNumbers = ["1","2","3","4"]

numbers = list(map(int,stringNumbers))

print(numbers)
```

Output:

```python
[1, 2, 3, 4]
```
