---
title: How to remove property from a JavaScript object
date: "2019-12-10"
tags: ['javascript','es6','object','property','key']
template: post
---

This simple example will show you how to remove a property from a JavaScript object using `delete`
keyword.

```js
const obj ={
    a:1,
    b:2,
    c:12
}

delete obj.a //  or delete obj['a']
```

The `delete` keyword deletes the object property and value.
