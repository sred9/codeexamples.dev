---
title: How to check if a element is hidden in JavaScript
date: "2019-12-10"
tags: ['javascript','hidden','jquery']
template: post
---

In the below example, we are checking if a `h1` element is hidden by using `display:none` property.

```js
const h1 = document.querySelector('.myHead');

if(h1.style.display === 'none'){
    console.log('im hidden');
}else{
    console.log('im visible');
}
```

Similarly, we can check if a `element` is hidden by using `visibility:hidden` property.

```js
const h1 = document.querySelector('.myHead');

if(h1.style.visibility === 'hidden'){
    console.log('im hidden');
}else{
    console.log('im visible');
}
```
