---
title: How to sort a list of numbers in Python
date: "2019-12-12"
tags: ['python','sorting','numbers','list']
template: post
---

This example will show you how to sort a list of numbers in python by using `sort()` method.

## Sort numbers in ascending order

```py
numbers = [4, 7, 1, 0, 2, 5, 3]

numbers.sort()

print(numbers)
```

Output:

```py
[0, 1, 2, 3, 4, 5, 7]
```

## Sort numbers in descending order

```py
numbers = [4, 7, 1, 0, 2, 5, 3]

# for descending  order we need to pass `reverse=True` argument
numbers.sort(reverse=True)

print(numbers)
```

Output:

```py
[7, 5, 4, 3, 2, 1, 0]
```
