---
title: How to get number of keys in JavaScript object
date: "2019-12-10"
tags: ['javascript','object','keys','es6']
template: post
---

To get the number of keys we need to used `Object.keys()` method in JavaScript.

Example:

```js
const obj = {
    name: 'king',
    age: 20,
    active: true
}

console.log(Object.keys(obj).length); // 3
```
