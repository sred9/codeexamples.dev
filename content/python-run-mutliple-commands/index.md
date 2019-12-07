---
title: How to run multiple commands in Python
date: "2019-12-08"
tags: ['python','bash','subprocess']
template: post
---

This example will show you how to run multiple bash commands with subprocess in python.

We need to use `shell=True` in subprocess:

```py
def subprocess_cmd(command):
    process = subprocess.Popen(command,stdout=subprocess.PIPE, shell=True)
    proc_stdout = process.communicate()[0].strip()
    print proc_stdout

subprocess_cmd('echo c; echo d')
```

Output:

```py
c
d
```
