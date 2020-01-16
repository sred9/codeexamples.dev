---
title: How to concatenate a list of strings in Python
date: "2020-01-17"
tags: ['python','concatenate','string','list']
template: post
---

In python, we can use the `join()` method to concatenate a list of strings into a single string.

Here is an example that concatenates the `user` list into a single string.

```python
users = ['jim','pop','king']

s = ''.join(users)

print(s)
```

Output:

```python
jimpopking
```

Similarly, you can also concatenate a list of elements with a separator.

```python
users = ['jim','pop','king']

s = '-'.join(users)

print(s)
```

Output:

```python
jim-pop-king
```

