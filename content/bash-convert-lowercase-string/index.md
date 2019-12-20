---
title: How to convert a string into a lowercase in Bash
date: "2019-12-21"
tags: ['bash','convert','shell','string','lowercase']
template: post
---

We can use POSIX standard `tr '[:upper:]' '[:lower:]'` command to convert a string into a lowercase in bash.

Here is an example that converts the string `WE LOVE CODING` to lowercase.

```bash
p="WE LOVE CODING"

echo "$p" | tr '[:upper:]' '[:lower:]'
```

Output:

```bash
we love coding
```

Similarly, you can also do it like this.

```bash
p="WE LOVE CODING"

echo "$p" | awk '{print tolower($0)}'
```
