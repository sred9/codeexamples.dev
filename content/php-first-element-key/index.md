---
title: How to get the first element key in a array PHP
date: "2019-12-17"
tags: ['php','array']
template: post
---

To get the first element key in a array we need to use the built-in [`array_key_first()`](https://www.php.net/manual/en/function.array-key-first.php)
function in PHP.

Here is an example:

```php
$arr = array("lion", "tiger", "cat");

echo array_key_first($arr); // 0
```

>array_key_first(): Get the first key of the given array without affecting the internal array pointer.
