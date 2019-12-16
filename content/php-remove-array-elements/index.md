---
title: How to remove elements from an array in PHP
date: "2019-12-17"
tags: ['php','elements','array']
template: post
---

Php has a built-in `array_splice()` function by using that we can remove elements from an array.

Here is an example that removes the second and third elements from an array.

```php
<?php
$fruits=array("apples","bananas","grapes","cherries");

// removing starts from index 1 and remove 2 elements including index 1
array_splice($fruits,1,2);

print_r($fruits);

?>
```

Output:

```php
Array ( [0] => apples [1] => cherries )
```
