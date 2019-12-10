---
title: How to Remove particular element from an array
date: "2019-12-10"
tags: ['javascript','arrays']
template: post
---

JavaScript offers us the`splice()` method by using that we can remove a particular element from an array by using its `index`.

Example:

```js
const arr = ['apple','orange','grapes','jackfruit'];

arr.splice(1,1); // orange is removed

arr.splice(2,1); // grapes is removed.

// after removing items the array look this

console.log(arr); // ['apple','jackfruit']
```

- The first argument in the slice method is `start-index`.
- The second argument in the slice method is `deleteCount`, it means the number of elements to remove from the array.

>Note: The `splice()` method modifies the original array.

Learn more about the [splice() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).
