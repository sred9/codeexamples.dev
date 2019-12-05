---
title: How to disable Input conditionally in Vue.js
date: "2019-12-05"
tags: ['vue']
template: post
---


This example shows you how to disable the `input` box conditionally in vue.js.

```html{3,4,13}
<template>
  <div id="app">
    <input type="text" :disabled="disabled" v-model="text">
    <button @click="disabled=!disabled">Toggle Enable</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      disabled: false
    };
  }
};
</script>
```

## Explanation

We can disable the `input` box by passing a boolean value `true`.

In the above code we have passed `disabled` property to the `input` disabled attribute by using the `Toggle` button we are the changing the `disabled` property value to `true`.
