---
title: How to convert a string to template string in JavaScript
date: "2019-12-16"
tags: ['javascript','strings','es6']
template: post
---

Currently, there is no standard built-in solution in JavaScript, but we can evaluate the string by using `eval()` function.

Here is an example of converting a string to a template string or literal.

```js
let a='The number is:${b}';

let b=10;

console.log(eval('`'+a+'`'));

//output --> "The number is:10"
```
