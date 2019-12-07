---
title: How to Loop inside React JSX
date: "2019-12-06"
tags: ['react','loops']
template: post
---

These two examples show you how to loop inside a react component JSX.

## Using For loop

```js
import React from 'react';

function App(){
   const arr = [1,2,3,4];
   const newArr = [];
   for (let i=0;i<arr.length;i++){
       newArr.push(<li key={i}>{arr[i]}</li>)
   }

  return(
     <ul>{newArr}</ul>
  )
}
```

## Using the Map method

```js
import React from 'react';

function App(){
   const arr = [1,2,3,4];

  return(
     <ul>
      {arr.map((e,i)=>{
         return <li key={i}>{e}</li>
       })}
     </ul>
  )
}
```
