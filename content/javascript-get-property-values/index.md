---
title: How to get all property values in JavaScript object
date: "2019-12-10"
tags: ['es6','keys','object','javascript']
template: post
---

To get the all property values of a JavaScript object without knowing keys (or properties) we need to use the `Object.values()` method and `forEach()` method.

```js
const obj = {
  name: "jio",
  age: 14,
  color: "blue"
}

const values = Object.values(obj);

values.forEach(val=>console.log(val));
```

Output:

```js
"jio"
14
"blue"
```
