---
title: How to convert a JavaScript object into a JSON string
date: "2019-12-21"
tags: ['javascript','convert','object','json','string']
template: post
---

To convert a JavaScript object to json string we can use the `JSON.stringfy()` method by passing object as an argument to it.

Here is an example that converts the `user` object to a JSON string.

```js
const user  = {
    name: "coach",
    age: 12,
    active:false
}

const userString  = JSON.stringify(user);

console.log(userString);
```

Output:

```js
"{"name":"coach","age":12,"active":false}"
```
