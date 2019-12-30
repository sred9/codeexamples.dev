---
title: Removing empty strings from a Python list
date: "2019-12-31"
tags: ['python','strings','remove','list']
template: post
---

To remove the empty strings from a list we can use the built-in [`filter()`](https://docs.python.org/3/library/functions.html#filter) function in python.

Here is an example that removes the two empty strings from the below list.

```python
stringList = ["Hello", "", "fun","","king"]
remove =  filter(None, stringList) # returns iterator
print(list(remove))
```

Output:

```python
["Hello","fun","king"]
```
