---
title: How to concatenate two strings in JavaScript
date: "2019-12-16"
tags: ['javascript','strings','es6']
template: post
---

JavaScript offers us three different ways to concatenate or joining strings.

The first way is using the plus `+` operator to join two strings.

```js
const str1= "After ";
const str2 = "noon";

const combine = str1+str2;

console.log(combine); // After noon
```

The second way is using the string interpolation with the help of es6 string literals.

```js
const combine = `${str1} ${str2}`;
```

The third way is using the `+=` operator to assign a string to the existing string.

```js
let str1 = "After ";

str1 += "noon"

console.log(str1); // "After noon"
```
