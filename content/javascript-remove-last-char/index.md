---
title: How to Remove the Last Character of a String in JavaScript?
date: "2019-12-15"
tags: ['javascript','strings','js']
template: post
---

To remove the last character of a string we need to use the `slice()` method by passing `0`,`-1` as arguments in JavaScript.

Here is an example that removes the last character `o` of a string.

```js
const string = "hello";

console.log(string.slice(0,-1)); // "hell"
```
