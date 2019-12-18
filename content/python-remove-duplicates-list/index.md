---
title: How to remove duplicate values from a Python List
date: "2019-12-19"
tags: ['python','duplicates','list']
template: post
---

To remove the duplicate values from a python list first, we need to convert python list to a dictionary then the dictionary will automatically remove the duplicate values and convert it back
to list.

Here is an example, which removes the duplicate numbers and strings from a given list.

```python
my_list = ["a",1, 2, "b", "d", "e", 1, "a", "e"]

my_list = list(dict.fromkeys(my_list))

print(my_list)
```

Output:

```python
[1, 2, 'b', 'd', 'a', 'e']
```

You can see our output doesn't contain any duplicate values.

Similarly, you can also use python [set()](https://docs.python.org/3/library/functions.html#func-set)
function to remove duplicate values from a list.

```python
my_list = ["a",1,2, "b", "d", "e", 1, "a", "e"]

my_list = list(set(my_list))

print(my_list)
```
