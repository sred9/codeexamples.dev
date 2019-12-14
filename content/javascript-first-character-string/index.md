---
title: How to get first character of a string in JavaScript
date: "2019-12-15"
tags: ['javascript','strings','js']
template: post
---

To get the first character of a string we can use the [`charAt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) method in JavaScript.

The first index of a string is `0`.

```js
const str = "helicopter";

const firstCharacter = str.charAt(0);

console.log(firstCharacter); // "h"
```

Similarly, we can use square brackets `[]` syntax to get the first character of a string.

```js
const str = "helicopter";

const firstCharacter = str[0];

console.log(firstCharacter); // "h"
```
