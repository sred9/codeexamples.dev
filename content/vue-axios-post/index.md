---
title: Vue axios http post request example
date: "2019-12-04"
tags: ['vue']
template: post
---

The below example will show you how to make post request in vue.js by using axios http library.

We are using json placeholder api to make our post request.

```html
<template>
  <div id="app">
    <form>
      <input v-model="title" placeholder="Title" required />
      <textarea v-model="body" placeholder="Body" required />
      <button @click.prevent="sendPost()">Submit Post</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: function() {
    return {
      post: "",
      title: "",
      body: ""
    };
  },
  methods: {
    sendPost() {
      const postData = { title: this.title, body: this.body };
      axios
        .post("https://jsonplaceholder.typicode.com/posts", postData)
        .then(res => {
          console.log(res.body);
        });
    }
  }
};
</script>
```

The `Submit Post` helps us to send the data to a Json placehodler api.

>Note: You need to install axios library to use it in your vue projects.
