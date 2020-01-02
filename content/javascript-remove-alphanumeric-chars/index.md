---
title: How to remove alphanumeric characters from a string in JavaScript
date: "2020-01-03"
tags: ['javascript','remove','alphanumeric','characters','string']
template: post
---

To remove the alpha-numeric characters from a string we can use the `replace` method by passing the
`/\D/g` regex as a first argument and empty string (`''`) as a second argument in JavaScript.

Here is an example:

```js
const alphaString  = "habit3532sjhsd4";

const numeric = alphaString.replace(/\D/g,'');

console.log(numeric); // 35324
```
