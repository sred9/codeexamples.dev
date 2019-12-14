---
title: How to reverse a string in JavaScript
date: "2019-12-15"
tags: ['javascript','strings','reverse','js']
template: post
---

These are the four different ways to reverse a string in JavaScript.

## 1. Using built-in methods

```js
const str = "map";

const reverse = str.split('').reverse().join('');

console.log(reverse); // pam
```

## 2. Using reduce method

```js
const str = "code"

const reverse=[...str].reduce((prev,next)=>next+prev)

console.log(reverse); //edoc
```

## 3. Using for loop

```js
function reverseString(str) {
    let reverse = "";
    for (const i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

console.log(reverseString('code')); //edoc
```

## 4. Using while loop

```js
function reverseString(str){

  const arr = [...str]
  let reverse= "";

  while(arr.length){
     reverse = reverse + arr.pop()
  }

  return reverse;
}

console.log(reverseString('code')); //edoc
```
