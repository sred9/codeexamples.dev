---
title: React Component Example
date: "2019-12-06"
tags: ['react']
template: post
---

A component is a reusable piece of ui where we can create once use throughout our whole app.

In React.js we can create components in two ways, class components and functional components.

## Example of creating class component

```js
import React,{Component} from 'react';

class Welcome extends Component {
  render() {
    return <h2>Welcome to react!</h2>;
  }
}

export default Welcome;
```

## Example of creating functional component

```js
import React from 'react';

function Welcome(){
  return (
     <h2>Welcome to react!</h2>;
  )
}

export default Welcome;
```
