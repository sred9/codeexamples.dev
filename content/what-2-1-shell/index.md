---
title: What is 2>&1 mean in Linux shell
date: "2019-12-09"
tags: ['bash','shell','command-line']
template: post
---

Consider we have a example command like this.

```bash
curl http://www.google.com > /dev/null 2>&1
```

## What does `2>&1` in the above command?

`2` is a standard error (stderr) file descriptor.

`>` is used for redirection.

`&` indicates follow a file descriptor, not a file name.

`1` is a standard output (stdout) file descriptor.

At final this `2>&1` command is used to redirect standard error to the standard output, it means to redirect the standard error to the same location where standard output is redirected.