---
title:  How to log a JavaScript object in the console
date: "2019-12-09"
tags: ['javascript','console']
template: post
---

To display a JavaScript object in the console we need to pass an object as a second argument to the `console.log()` method.

```js
const obj = {
    id:1,
    name: "king"
}

console.log(`This is king`, obj); // correct way
```

Output:

```js
This is king {id: 1, name: "king"}
```
