---
title: How to get Intersection of arrays in JavaScript
date: "2019-12-10"
tags: ['javascript','arrays']
template: post
---

In this following example, we are using `filter` and `includes` method to get the intersection of two arrays in JavaScript.

```js
const arr1 = [4,5,6,7];
const arr2 = [4,6,1,3];

const intersection = arr1.filter(val=>arr2.includes(val));

console.log(intersection); // [4,6]
```
