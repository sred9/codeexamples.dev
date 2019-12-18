---
title: How to reverse a string in Python
date: "2019-12-19"
tags: ['python','reverse','string']
template: post
---

To reverse a string in python, we can use the slice syntax by passing the step of `-1` and leaving beginning and end positions.

Here is an example.

```python
mystring = "python"

reversed_string = mystring [::-1]

print(reversed_string)
```

Output:

```python
nohtyp
```

Similarly, we can also use the `join()` function and `reversed` function to reverse a string.

```python
mystring = "python"

reversed_string = ''.join(reversed(mystring))

print(reversed_string)
```
