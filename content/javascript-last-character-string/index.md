---
title: How to get last character of string in JavaScript
date: "2019-12-15"
tags: ['javascript','js','strings']
template: post
---

There are two ways to get the last character of a string in JavaScript.

## 1. Using charAt() method

By passing `string.length-1` as an argument to the `charAt()` method we can get the last character of
a string.

```js
const string = "hello";

const lastCharacter = string.charAt(string.length-1);

console.log(lastCharacter); // "o"
```

## 2. Using slice() method

If we pass `-1` as an argument to the `slice()` method we can get the last character of a string.

```js
const string = "hello";

const lastCharacter = string.slice(-1);

console.log(lastCharacter); // "o"
```
