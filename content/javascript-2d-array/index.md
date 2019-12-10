---
title: How to create two dimensional array in JavaScript
date: "2019-12-10"
tags: ['javascript','es6','arrays','multidimensional-array']
template: post
---

This below example will help you to create a two-dimensional array in JavaScript using `Array.form` and `map` methods.

```js
const arr = Array.from({length: 5}, (v, k) => k+1);

const twodArray = arr.map((e,i)=>{
        return [arr[i],arr[i]]
})

console.log(twodArray);
```

Output:

```js
[[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]
```

You can access the 2d array elements like this.

```js
twodArray([0][0]); // 1
twodArray([3][0]); // 4
```

## Creating 2d array manually

You can manually create a two-dimensional array by placing an array inside an array.

```js
const arr = [[1,2],[3,4]];
```
