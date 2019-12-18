---
title: How to read a file line by line into a list in Python
date: "2019-12-19"
tags: ['python','file','list','string']
template: post
---


Here is an example that reads a `welcome.txt` file line by line and stores it into a list in the `welcome_list` variable.

```python
with open('welcome.txt') as f:
 welcome_list = f.readlines()
```

## References

1. [Python docs – Reading and Writing Files](https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files)

2. [Methods of File Objects](https://docs.python.org/3/tutorial/inputoutput.html#methods-of-file-objects)