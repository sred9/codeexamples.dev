---
title: How to split a string in JavaScript
date: "2019-12-15"
tags: ['javascript','strings','js']
template: post
---

JavaScript has a built-in `split()` method by using that we can split a string into an array of substrings.

In this below example, we are splitting a string by the comma `,` separator.

```js
const name = "code,examples";
const split = name.split(',');

// Now we can access the splitted strings like this

const firstName = split[0]; // code
const secondName= split[1]; // examples
```

## Links

[Learn more about split method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)