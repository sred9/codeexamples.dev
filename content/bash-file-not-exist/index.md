---
title: How to check if the file does not exist in Bash
date: "2019-12-09"
tags: ['bash','shell','file']
template: post
---

To check, if a file doesn't exist in the bash we need to use not `!` logical operator in the `test` command.

```bash
if [ ! -f /tmp/songs.txt ]; then
    echo "File not found!"
fi
```

>-f is used to check if a regular file exists.
