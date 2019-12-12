---
title: How to sort array of numbers in JavaScript
date: "2019-12-12"
tags: ['javascript','sorting','arrays','numbers']
template: post
---

In this example, we will learn about how to sort an array of numbers in JavaScript by using the
`sort()` method.

## Sort numbers in ascending order

```js
const numbers = [5,56,2,5,1];
const sortAsc = numbers.sort((a,b)=>a-b);

console.log(sortAsc); // [1, 2, 5, 5, 56]
```

## Sort numbers in descending order

```js
const numbers = [5,56,2,5,1];
const sortDesc = numbers.sort((a,b)=>b-a);

console.log(sortDesc); // [56, 5, 5, 2, 1]
```

## References

Learn more about the [sort( ) method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).
