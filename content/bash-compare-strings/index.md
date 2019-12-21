---
title: How to compare two strings in Bash
date: "2019-12-22"
tags: ['bash','compare','strings','unix','shell']
template: post
---

To compare a two string in bash, we can use the `if` statement  with equality comparison operator
(`==`).

Here is an example:

```bash
str1="hello"
str2="hello"

# Equality Comparison
if [ "$str1" == "$str2" ]; then
    echo "Strings are matched"
else
    echo "Strings don't match"
fi
```

Output:

```bash
Strings are matched
```

Note: The spaces are important inside square brackets `[ "$str1" == "$str2" ]`
