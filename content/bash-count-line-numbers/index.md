---
title: How to count all lines of code in a directory Bash
date: "2019-12-09"
tags: ['bash','shell','windows','linux']
template: post
---

The following command is used to count the number of lines of code in a specified directory and its subdirectories.

```bash
find . -name '*.html' | xargs wc -l
```
