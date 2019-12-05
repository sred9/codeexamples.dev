---
title: How to get query parameters from a URL in Vue.js
date: "2019-12-06"
tags: ['vue']
template: post
---

To get the query parameters from a url in vue router, we need to use `this.$route.query` object inside our vue components.

Example:

Let's say you have a path like this.

```js
https://example.com?name=sai
```

Now,inside your vue component you can access the query params by using the `key`.

```js
console.log(this.$route.query.name); // sai
```

If you want to access the query params inside your vue template you need to use like this.

```html{3}
<template>
  <div>
    <h1>This is User {{$route.query.name}}</h1>
  </div>
</template>
```
