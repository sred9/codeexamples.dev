---
title: How to check if string contains a substring in JavaScript
date: "2019-12-10"
tags: ['javascript','substring','es6']
template: post
---

We can use `includes()` method to check if a string contains a substring in JavaScript.

```js
let string = "how are you";
let substring = "you";

console.log(string.includes(substring)); // true
```

The `includes()` method returns `true` if a string is found; else it returns `false`.

## Using indexOf method

Similarly, we can also use the `indexOf()` method where it returns `-1` if a string doesn't contain a substring else it returns the index of the substring.

Example:

```js
let string = "how are you";
let substring = "you";

console.log(string.indexOf(substring) !== -1); // true
console.log(string.indexOf('fun') !== -1); // false
```
