---
title: How to trim whitespaces of a string in Python
date: "2019-12-21"
tags: ['python','trim','string','whitespaces']
template: post
---

We can remove the leading and trailing whitespaces of a string by using the `strip()` method in Python.

Here is an example that removes the whitespaces of a string

```python
a = '   Happy Python  '

print(a.strip()) # removes beginning and ending
```

Output:

```python
Happy Python
```
