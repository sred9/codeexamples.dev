---
title: How to remove empty elements from an array in PHP
date: "2019-12-27"
tags: ['php','elements','array','remove']
template: post
---

Php has a built-in `array_filter()` function by using that we can remove the empty elements from an array.

Here is an example, that removes the empty strings from a given array.

```php
$fruits = array("apple", "", "avocado", "grapes", 20, "","");

print_r(array_filter($fruits));
```

Output:

```php
Array
(
    [0] => apple
    [2] => avocado
    [3] => grapes
    [4] => 20
)
```
