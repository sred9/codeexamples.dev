---
title: Three dots(...) inside React components
date: "2019-12-07"
tags: ['react']
template: post
---

In JavaScript, we have three dots `...` syntax which is called spread operator it helps us to expand the iterable elements or object properties.

In react, by using the three dots syntax we can spread the props easily instead of passing data to the each prop.

Let's say we have data like this.

```js
var person= {
    name: 'John',
    age: 10
}
```

We can use the spread operator to pass the above data as props.

```js
<Person {...person}/>
```

This is the same as.

```js
<Person name={person.age} age={person.age}/>
```
