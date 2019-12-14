---
title: How to make copy of a string in JavaScript
date: "2019-12-15"
tags: ['javascript','strings','js']
template: post
---

JavaScript has a built-in `slice()` method by using that we can make a copy of a string.

Example:

```js
const str = "apple";

const copy = str.slice();

console.log(copy); // "apple"
```

Similary, you can do it by assigning the old string to a new variable.

```js
const str = "apple";

const copy = str;

console.log(copy); // "apple
```
