---
title: Difference between var functionName = function() {} and function functionName() {} in JavaScript
date: "2019-12-10"
tags: ['javascript','function','difference']
template: post
---

In JavaScript, we have two ways to declare a function.

## First-way using function expression

We can declare a function in JavaScript by assigning a function to a variable which is called function expression.

```js

// Uncaught TypeError: add is not a function
console.log(add(1,2));

var add = function(a,b){
    return a+b
}

```

## Second-way using function declaration

```js
// it works fine
console.log(add(1,2)); // 3

function add(a,b){
    return a+b;
}
```

Now let's talk about the difference between the above two functions.

- If a function is created by using the function expression that function is only available to use after the declaration.

- If a function is created by using the function declaration that function is available anywhere in our script file.
