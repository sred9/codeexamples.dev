---
title: How to remove first character from a string in JavaScript
date: "2019-12-15"
tags: ['javascript','strings','js']
template: post
---

To remove the first character from a string we need to use the `slice()` method passing `1` as an argument in JavaScript.

Here is an example that removes the first character `h` from a string.

```js
const string = "hello";

console.log(string.slice(1)); // "ello"
```
