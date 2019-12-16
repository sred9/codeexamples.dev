---
title: How to get a unix timestamp in JavaScript
date: "2019-12-16"
tags: ['javascript','time stamp','date']
template: post
---

To get a Unix timestamp in JavaScript we need to add unary operator `+` to the `Date()` constructor.

Example:

```js
const unix = + new Date();

console.log(unix); // 576366756374
```

To get the timestamp in milliseconds you can use:

```js
const milliseconds = Math.floor(Date.now() / 1000);
```
