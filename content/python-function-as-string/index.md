---
title: How to get function name as a string in Python
date: "2020-01-03"
tags: ['python','function','string']
template: post
---

In python, every function has an underscore `__name__` property by using that we can get the function name as a string.

Here is an example that gets the `add` function name as a string.

```python
def add(a, b):
   return a + b

print(add.__name__)
```

Output:

```python
add
```
