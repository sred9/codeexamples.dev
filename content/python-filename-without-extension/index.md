---
title: How to get a filename without a extension in Python
date: "2019-12-22"
tags: ['python','filename','extension','path']
template: post
---

We can get a filename without an extension by using the `os.path.splittext()` method in python.

Here is an example that gets a filename without a `.html` extension.

```python
import os

filename = "/path/files/site/contact.html"

print(os.path.splitext(filename)[0])
```

Output:

```python
/path/files/site/contact
```
