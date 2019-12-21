---
title: How to compare case insensitive strings in JavaScript
date: "2019-12-22"
tags: ['javascript','compare','string','case-insensitive']
template: post
---

To compare a case insensitive strings, we can use either the [`toUpperCase()`](/javascript-string-to-uppercase/) or [`toLowerCase()`](/javascript-string-to-lowercase/) methods in JavaScript.

## Comparision Using toUpperCase

```js
const str1 = "heLLo viEwer loAd";

const str2 = "HELLO viewer load";

console.log(str1.toUpperCase() === str2.toUpperCase());
```

Output:

```js
true
```

## Comparison using toLowerCase

```js
const str1 = "heLLo viEwer loAd";

const str2 = "HELLO viewer load";

console.log(str1.toLowerCase() === str2.toLowerCase());
```

Output:

```js
true
```
