---
title: How to convert ascii code to character Javascript?
date: "2019-12-15"
tags: ['javascript','converting','js']
template: post
---

To convert a ascii code to character we need to use `String.fromCharCode()` method in JavaScript.

Here is an example:

```js
const character = String.fromCharCode(67);

console.log(character); // "C"
```

If you have more than one ASCII code you can pass it like this.

```js
const characters = String.fromCharCode(67,79,68,69);

console.log(characters); // "CODE"
```
