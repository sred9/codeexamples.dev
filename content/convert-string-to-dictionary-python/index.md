---
title: Converting string to dictionary in Python
date: "2020-01-01"
tags: ['python','string','dictionary','convert']
template: post
---

To convert a string to dictionary we can the built-in [`ast.literal_eval()`](https://docs.python.org/3/library/ast.html#ast.literal_eval) method in Python.

Here is an example:

```python
import ast

str = "{'bat' : 'rat', 'mat' : 'kitty'}"

print(ast.literal_eval(str))
```

Output:

```python
{'bat': 'rat', 'mat': 'kitty'}
```
