---
title: How to write a string to a text file in Python
date: "2020-01-03"
tags: ['python','string','write','text-file','io']
template: post
---

To write a string to text file we can use the `print()` method in python.

Here is an example, that writes the string data to `amount.txt` file.

```python
price = 33.3
your_data = {"Purchase Amount": price}

print(your_data,  file=open('D:amount.txt', 'w'))
```

>It opens the `amount.txt` file with `your_data` string.