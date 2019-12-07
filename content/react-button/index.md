---
title: How to create a button component in React
date: "2019-12-08"
tags: ['react','component']
template: post
---

This example will show you how to create a reusable button component in react.

```js:title=Button.js
import React from "react";

function Button(props) {
  return <button onClick={props.click}>{props.name}</button>;
}

export default Button;
```

## Using the button component

We can use our button component anywhere in our react app like this.

```js:title=App.js
import React, { Component } from "react";
import Button from "./Button.js";

class App extends Component {
  state = {
    name: "king"
  };
  changeName = () => {
    this.setState({
      name: "queen"
    });
  };
  render() {
    return (
      <div>
        <h1>{name}</h1>
        <Button name="Change Name" click={this.changeName} />
      </div>
    );
  }
}

export default App;
```
