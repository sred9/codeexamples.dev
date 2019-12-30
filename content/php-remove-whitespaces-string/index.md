---
title: How to remove whitespaces from a string in PHP
date: "2019-12-31"
tags: ['php','whitespaces','string','remove']
template: post
---

To remove all whitespaces from a string, we can use the `str_replace()` method in PHP.

Here is an woking code example:

```php
$str = str_replace(" ","", "hello you can see me without spaces");
echo $str;
```

Output:

```php
helloyoucanseemewithoutspaces
```

### References

- [str_replace() method](https://www.php.net/manual/en/function.str-replace.php)
