---
title: How to concatenate the two strings in PHP
date: "2019-12-18"
tags: ['php','concatenation','strings']
template: post
---

To concatenate the two strings we need to use period `.` concatenation operator in PHP.

Here is an example:

```php
$first  = "hello ";
$second = "king";

$result = $first . $second ;

echo  $result
```

Output:

```php
hello king
```

Similary, you can also use `.=` operator.

```php
$name = "john ";

$name .= "james";

echo $name
```

Output:

```php
john james
```
