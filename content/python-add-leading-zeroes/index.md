---
title: How to add leading zeroes to a Python String
date: "2019-12-20"
tags: ['python','string','zero-padding']
template: post
---

To add leading zeroes to a python string, we can use the `zfill()` method.

Here is an example that adds zeroes to the left side of a numeric string `5`.

```python
num = "5"

print (num.zfill(4))
```

Output:

```python
0005
```

Similarly, you can also use the `rjust()` method.

```python

num = "7"

print (num.rjust(4, '0'))
```

Output:

```python
0007
```
