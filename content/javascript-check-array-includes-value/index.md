---
title: How to check if an array includes a value in JavaScript
date: "2020-01-08"
tags: ['javascript','array','value','includes']
template: post
---

JavaScript, has a built-in [`includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) method by using that we can check if an array includes a particular value or not.

> The `includes()` method returns true if an array includes a value else it returns false.

Here is an example:

```js
const arr = [1,2,4,5,"meal"];

console.log(arr.includes(1));      // true

console.log(arr.includes("meal")); // true

console.log(arr.includes("gym"));  // false

console.log(arr.includes(120));    // false
```
