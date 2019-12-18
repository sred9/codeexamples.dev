---
title: How to uppercase the first letter of a string in JavaScript
date: "2019-12-19"
tags: ['javascript','uppercase','string','capitalize']
template: post
---


To make the first letter of a string uppercase we need to use the combination of three methods which are `charAt()`, `toUpperCase()` and, `slice()`.

Here is an example that uppercases the first letter of a string.

```js
function upperCaseLetter(str){
 return str.charAt(0).toUpperCase()+str.slice(1);
}


console.log(upperCaseLetter("keyboard")); // Keyboard
```
