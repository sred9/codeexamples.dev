---
title: How to convert a number to a string in JavaScript
date: "2019-12-16"
tags: ['javascript','strings','numbers','es6']
template: post
---

To convert a number to a string we need to use the `Number.toString()` method in JavaScript.

Here is an example:

```js
const num = 10;

const string = num.toString();

console.log(string); // "10"
```

Similarly, we can also do it by adding an empty string (`''`) in front of a number.

```js
const num = 20;

const string = '' +num;

console.log(string); // "20"
```
