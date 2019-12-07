---
title: How to Get the source directory of a Bash script within the script itself
date: "2019-12-08"
tags: ['bash','directory']
template: post
---

This example will help you to get the full path of an directory using bash script within the script itself.

```bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
```

>Note: The above code, will give you the full directory name, it's doesn't matter where you called from.
