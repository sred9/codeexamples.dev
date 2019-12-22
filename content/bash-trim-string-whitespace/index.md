---
title: How to trim whitespace of a string in Bash
date: "2019-12-23"
tags: ['bash','string','trim','variables']
template: post
---

We can remove the leading and trailing whitespaces of a string by using the [xargs](https://en.wikipedia.org/wiki/Xargs) in Bash.

Here is an example:

```bash
str="   how are you  "
echo $str | xargs
```

Output: trimmed string

```bash
how are you
```
