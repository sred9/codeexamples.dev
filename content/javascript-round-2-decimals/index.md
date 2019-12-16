---
title: How to round 2 decimal places in JavaScript
date: "2019-12-16"
tags: ['javascript','decimals']
template: post
---

In JavaScript, we have the `toFixed()` method by using that we can round a number to 2 decimal places.

Here is an example:

```js
const num = 13.13456787654;
const twoDecimal = num.toFixed(2);

console.log(twoDecimal); // 13.34
```
