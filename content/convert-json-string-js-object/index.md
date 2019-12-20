---
title: How to convert a JSON string into a JavaScript object
date: "2019-12-21"
tags: ['javascript','convert','json','string','object']
template: post
---

To convert a JSON string into a JavaScript object we can use the `JSON.parse()` method by passing the string as an argument to it.

Here is an example that converts the `user` JSON string to a JavaScript object.

```js
const userString = '{"name":"coach","age":12,"active":false}';

const userObject = JSON.parse(userString);

console.log(userObject);
```

Output:

```js
 {
 active: false,
 age: 12,
 name: "coach"
}
```
