---
title: Vue.js http get request example
date: "2019-12-02"
tags: ['vue']
template: post
---

We are using axios to make http get request in vue.

First install the axios library using npm.

```bash
npm i axios
```

In this example, we are using the json placeholder api to make the get request and display the data in the page.

```html
<template>
  <div>
  <ul>
      <li v-for="(value, key) in post" :key="key">
         {{ key }} : {{ value }}
     </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      post: null,
    };
  },
  created: function() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => {
        this.post = res.data;
      })
  }
};
</script>
```
