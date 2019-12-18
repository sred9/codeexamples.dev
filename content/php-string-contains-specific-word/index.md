---
title: How to check whether a string contains a specific word in PHP
date: "2019-12-19"
tags: ['php','string','contains']
template: post
---

To check whether a string contains a specific word or not, we can use the [`strpos()`](https://www.php.net/manual/en/function.strpos.php.) function in PHP.

```php
$str = 'i love apples';

$word = 'love'

if (strpos($str, $word) !== false) {
 echo 'word is found';
}else{
 echo 'word not found'
}
```

>Note: The `strpos()` function, returns the position of the first occurrence of a substring in a string else it returns false if a substring is not found.

String positions starts from 0.
