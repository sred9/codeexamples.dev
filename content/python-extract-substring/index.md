---
title: How to extract a substring in a String Python
date: "2020-02-03"
tags: ['python','substring','string']
template: post
---

To extract a substring in python we can use the slicing syntax `[]` by passing the start index and end index as an argument.

Here is an example that extracts the `23` from a given string.

```python
x = 'hel23lo'

# 3 is start index, 5 is end index
extract = x[3:5]

print(extract)
```

Output:

```python
23
```
