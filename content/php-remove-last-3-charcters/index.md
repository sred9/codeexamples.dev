---
title: "Php: How to remove last 3 characters from a string"
date: "2020-02-05"
tags: ['php','remove','characters']
template: post
---

To remove the last three characters from a string we can use the  [`substr()`](https://www.php.net/manual/en/function.substr.php) method by passing the `start` and `length` as arguments.

Here is an example that removes the last three characters from a given string.

```php
$name="John res";

//if length is negative it starts removing from the end
$remove = substr($name,0,-3);

echo $remove;
```

Output:

```php
John
```