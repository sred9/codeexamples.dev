---
title: How to count string occurrences in a string JavaScript
date: "2020-01-11"
tags: ['javascript','string','count']
template: post
---

To count the string occurrences in a given string, we can use the `match()` method in JavaScript.

> The match() method accepts the regular expression as an argument and it returns the array of matched values.

Here is an example that counts the character `ok` in the following string.

```js
const str = "he is ok, are you ok, hobby lol ok";
const count = str.match(/ok/g).length;

console.log(count); // 3
```
