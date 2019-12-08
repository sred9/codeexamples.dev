---
title: How to concatenate variables in Bash
date: "2019-12-09"
tags: ['bash','shell','variables']
template: post
---

To concatenate a string to the existing string in the bash we need to use `+=` operator as shown in the below example.

```bash
name="code"
name+="example"

echo "$name"
```

Output:

```bash
codexample
```

If you want to concatenate or join two variables in the bash you can do it like this.

```bash
first="code"
last="example"
name="$first $last"

echo "$name"
```

Output:

```bash
code example
```
