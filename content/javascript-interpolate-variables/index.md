---
title: How to interpolate variables in strings JavaScript
date: "2019-12-16"
tags: ['javascript','variables','strings','interpolation']
template: post
---

To interpolate variables in strings we need to use [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) in JavaScript.

Example

```js
const a = 2;
const b = "is number"

const c = `Two ${a} ${b}`; // without concatenation

console.log(c); // Two 2 is number
```

> Template literals are new way of declaring strings by using the back-tick (` `)  instead of double or single quotes.
