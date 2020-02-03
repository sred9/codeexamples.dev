---
title: How to replace a line in a text file by line number-Sed
date: "2020-02-03"
tags: ['bash','sed','replace','text','file']
template: post
---

To replace a line in a text file by using line number we can use the following command in sed.

```bash
sed '2 c\hello you can see me in 2nd line' myfile.txt
```

This above command will replace the second line  with a `hello you can see me in 2nd line`.
