---
title: For loop in Bash script
date: "2019-12-08"
tags: ['bash','shell','command']
template: post
---

for loop is used to iterate over a list of items until a particular condition is true.

The following example will show you how to write a for loop in bash script.

```bash
for ((i = 0 ; i < 10 ; i++ ));
 do
  echo "$i";
 done
```

In the above code, the `for` loop starts from `0` and runs up to `i<10` on each iteration we are incrementing the `i` value by `1`.
