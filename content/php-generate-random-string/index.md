---
title: How to generate random alphanumeric string in PHP
date: "2019-12-23"
tags: ['php','string','generator','random']
template: post
---

This below function will help you to generate a random alphanumeric string in PHP.

```php
function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

echo $generateRandomString();
```

Output:

```php
ozQS8IkMb2
```

>Note: By default ,`generateRandomString()` function generates the combination of 10 random characters.
