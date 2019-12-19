---
title: How to print literal curly-brace characters in python string and use .format
date: "2019-12-20"
tags: ['python','string-formatting','curly-braces']
template: post
---

You need to wrap it with double curly braces `{{ }}` to print literal curl-brace characters in a python string.

Here is an example:

```python
name = " {{ Hello python }} {0}"

print (name.format(101))
```

Output:

```python
{ Hello python } 101
```

Another example:

```python

name = " {{ Hello python }} {0} {1}"

print (name.format(101,109))
```

Output:

```python
{ Hello python } 101 109
```
