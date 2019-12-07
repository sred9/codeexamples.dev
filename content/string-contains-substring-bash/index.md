---
title: How to check if a string contains a substring in Bash
date: "2019-12-08"
tags: ['bash','shell','substring']
template: post
---

This below example will help you to check if a string contains a substring in the bash script.

```bash
str="How are you"

if [[ $str = *you* ]]; then
  echo "it's found"
fi

#output--> it's found
```

In the above code, we have used wild card character `*` to find a substring in the given `str`.

If your substring contains spaces you need to add double quotes with the `*` character.

```bash
str="How are you"

if [[ $str = *"are you"* ]]; then
  echo "it's found"
fi

# output--> it's found
```
