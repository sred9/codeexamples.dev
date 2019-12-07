---
title: React pass parameter into onClick method
date: "2019-12-07"
tags: ['react','events']
template: post
---

This example will show you how to pass a parameter to the react onClick event method.

In react we normally attach event handler method to the `onClick` event like this.

```js
<button onClick={handleClick} >Click me</button>
```

if you want to pass parameters to the event handler method you need to use arrow functions.

```js
<button onClick={()=>handleClick(someValue)} >Click me</button>
```
