---
title: How to Check if the program exists from a Bash script
date: "2019-12-08"
tags: ['bash','command','shell']
template: post
---

You can use the posix compatible command to check, if the command exists from a bash script or not.

```bash
command -v <your_command>
```

```bash
command -v king >/dev/null 2>&1 || { echo >&2 "king is not installed.  Aborting."; exit 1; }
```

if it returns `>0` when the command is not found or an error occurs.

similary you can use `type` and `hash`.

```bash
type king >/dev/null 2>&1 || { echo >&2 " king is not installed.  Aborting."; exit 1; }
```

```bash
hash king 2>/dev/null || { echo >&2 "king not installed.  Aborting."; exit 1; }
```

The below example will show you `gdate` if exists else it shows `date`.

```bash
if hash gdate 2>/dev/null; then
        gdate "$@"
    else
        date "$@"
fi
```
