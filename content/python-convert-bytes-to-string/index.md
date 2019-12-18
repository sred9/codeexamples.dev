---
title: How to convert bytes to a string in Python
date: "2019-12-19"
tags: ['python','bytes','string','convert']
template: post
---

To convert bytes to a string you need to use the `decode()` method by passing character encoding `utf-8` OR `ascii` as an argument in python.

Here is an example:

```python

print(b"pears".decode("utf-8"))

```
