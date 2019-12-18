---
title: How to replace all occurrences in a string JavaScript
date: "2019-12-19"
tags: ['javascript','string','replace']
template: post
---

To replace all occurrences of a string we can use the `replace()` method in JavaScript.

Here is an example, which replaces all occurrences of an `ola` in the following string.

```js
const str = "how ola are ola you ola";
                        // (search , replacement)
const replaced = str.replace(/ola/gi, "");

console.log(replaced);
```

Output:

```js
how are you
```
