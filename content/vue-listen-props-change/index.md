---
title: How to Listen for props change in Vue.js
date: "2019-12-05"
tags: ['vue']
template: post
---

In Vue.js, we have watchers which helps us to listen for a props change and runs a function which contains the new value and old value passed to the prop.

This below example shows you how to properly watch for the prop changes in vue.js.

```html{18}
<template>
  <div id="app">
     <Welcome :msg="text"/>
     <button @click="text='Opps'">Change TEXT</button>
  </div>
</template>

<script>
import Welcome from "./components/Welcome.vue";

export default {
  data(){
    return {
      text: "Hello"
    };
  },
  watch: {
    "text": function(val, oldVal) {
      console.log("new: %s, old: %s", val, oldVal);
    }
  },
  components: {
    Welcome
  }
};
</script>
```
