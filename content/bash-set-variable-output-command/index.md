---
title: How to set a variable to the output of a command in Bash
date: "2019-12-09"
tags: ['bash','shell','command-line']
template: post
---

We need to use double quotes `$"command"` to set a variable as an output to the command line argument in bash.

```bash
VAR1="$1"
VAR2="$2"

MOREF=`sudo run command against `$VAR1` | grep name | cut -c7-`

echo "$MOREF"
```

Similarly, you can use backticks `command`.
