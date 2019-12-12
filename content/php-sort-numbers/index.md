---
title: How to sort an array of numbers in PHP
date: "2019-12-12"
tags: ['php','arrays','sorting','numbers']
template: post
---

In this example, you will learn about how to sort an array of numbers both ascending and descending order in PHP.

## Sorting numbers in ascending order

```php
<!DOCTYPE html>
<html>
<body>

<?php
$numbers = array(2, 45, 1, 3, 5);
sort($numbers); // ascending order

$arrlength = count($numbers);
for($x = 0; $x < $arrlength; $x++) {
    echo $numbers[$x];
    echo "<br>";
}
?>

</body>
</html>
```

Ouput:

```php
1
2
3
5
45
```

## Sorting numbers in descending order

```php
<!DOCTYPE html>
<html>
<body>

<?php
$numbers = array(2, 45, 1, 3, 5);
rsort($numbers); // descending order

$arrlength = count($numbers);
for($x = 0; $x < $arrlength; $x++) {
    echo $numbers[$x];
    echo "<br>";
}
?>

</body>
</html>
```

Output:

```php
45
5
3
2
1
```
