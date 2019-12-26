---
title: How to convert a String to Bytes in Python
date: "2019-12-27"
tags: ['python','convert','string','bytes']
template: post
---

To convert a string to bytes we can use the [`encode()`](https://docs.python.org/3/library/stdtypes.html#str.encode) function in python.

Here is an example:

```python
my_str = "How are you"
my_bytes = my_str.encode() # By default utf-8 encoding is selected

print(my_bytes)
```

Output:

```python
b'How are you'
```

>str.encode() : Returns an encoded version of the string as a bytes object.
