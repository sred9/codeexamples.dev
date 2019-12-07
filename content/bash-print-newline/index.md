---
title: How to print a new line in bash
date: "2019-12-08"
tags: ['bash','command','shell']
template: post
---

In `echo` we need to use `/n` literal for printing a new line in bash.

Example:

```bash
echo "how\nare\nyou"

# how
# are
# you
```

If the above command doesn't work you can try by adding a `-e` option to the echo.

```bash
echo -e "how\nare\nyou"

# how
# are
# you
```

>Note:  `-e`  option enables the interpretation of backslash escapes.

## Using printf

Similarly, we can use `printf` command instead of `echo`.

```bash
printf "What\nare\nyou\ndoing\n"

# What
# are
# you
# doing
```
