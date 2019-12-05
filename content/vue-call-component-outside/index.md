---
title: Call a Vue.js component method from outside the component
date: "2019-12-05"
tags: ['vue']
template: post
---

This example shows you how to call a Vue.js component method from outside the component.

First create a child component.

```js
<script>
Vue.component('my-counter',{
      template: `
       <div>
         <p>count value: {{ count }}</p>
       </div>
      `,
      data: function() {
        return {
          count: 0,
        };
      },
      methods: {
        increment() {
          this.count++;
        }
      }
})
var vm = new Vue({
     el: '#app',
})
</script>
```

Now in your html add this code.

```html{2}
<div id="app">
    <my-counter ref="c"></my-counter>
    <button @click="$refs.c.increment()">Increment</button>
</div>
```

In the above code, we have added `ref` attribute to the `my-counter` component.

Inside the `button` element we can access the component by using `$refs` property and call the component method.

## Full working example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Vue.js</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.js">
  </script>
</head>

<body>
<div id="app">
    <my-counter ref="c"></my-counter>
    <button @click="$refs.c.increment()">Increment</button>
</div>

<script>
Vue.component('my-counter', {
    template: `
       <div>
         <p>count value: {{ count }}</p>
        </div>
      `,
    data: function () {
        return {
            count: 0,
        };
    },
    methods: {
        increment() {
            this.count++;
        }
    }
})
var vm = new Vue({
    el: '#app',
})
</script>
</body>
</html>
```
