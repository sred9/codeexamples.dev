---
title: How to get a substring of string in Python
date: "2019-12-19"
tags: ['python','sub string','string']
template: post
---

To get a substring of a string we can use the slice syntax `[]` in python.

Here is an example that gets the first 3 letters from a string.

```python
x = "How are you"

print(x[:3])
```

Output:

```python
How
```

If you want to get the last 3 letters from a string you need pass negative index.

```python
x = "How are you"

print(x[-3:])
```

```python
you
```

If you want to get middle letters you need to slice first and last letters like this.

```python
x = "How are you"

print(x[3:-3])
```

Output:

```python
are
```
