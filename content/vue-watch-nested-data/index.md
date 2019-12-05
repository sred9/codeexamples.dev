---
title: How to Properly watch nested data in Vue.js
date: "2019-12-03"
tags: ['vue']
template: post
---


This examples shows you how to watch nested data structures in Vue.js

```html{20}
<template>
  <div id="app">
    <input v-model="items.a">
    <p>{{items.a}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: {
        a: 1,
        b: 2,
        c: 3
      }
    };
  },
  watch: {
    'items.a': function(newval, oldVal) {
      console.log("new: %s, old: %s", newval, oldVal);
    }
  }
};
</script>
```

Now, if we type something new in `input` element, vue watches the `items.a` property and runs the function.

The watcher function shows us `new value` and `old value`(previous value) passed to that property.
