---
title: How to get first element of an array in PHP
date: "2019-12-17"
tags: ['php','array']
template: post
---

To get the first element of an array we need to use the built-in [`reset()`](https://www.php.net/reset) function in PHP.

```php
$arr = array("lion", "tiger", "cat");

echo reset($arr); // lion
```

>reset() -> rewinds array's internal pointer to the first element and returns the value of the first array element.
