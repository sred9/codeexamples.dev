---
title: How to remove whitespaces from a string in JavaScript?
date: "2019-12-16"
tags: ['javascript','strings','remove']
template: post
---

To remove the white spaces between the characters from a string we need to use the `replace()` method in JavaScript.

Here is an example:

```js
const string = "hello have some fun";

const remove = string.replace(/\s/g,"");

console.log(remove); // hellohavesomefun
```

In the above code, we have passed the regex `/\s/g` where:

- `\s` is the regex for whitespace.
- g is the global flag, meaning match all `\s` whitespaces.
