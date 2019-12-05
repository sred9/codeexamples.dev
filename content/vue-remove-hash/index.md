---
title: How to remove hash from vue router URL
date: "2019-12-03"
tags: ['vue']
template: post
---

By default `vue-router` runs in hash mode,to remove the hash from the `url` we need to use __history mode__ instead of hash mode.

This example shows you how to remove hash from a Url.

```js
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```
