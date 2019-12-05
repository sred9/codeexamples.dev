---
title: How to pass props to {this.props.children}
date: "2019-12-01"
tags: ['react']
template: post
---

We are using [React.Children.map](https://reactjs.org/docs/react-api.html#reactchildren) and [React.cloneElement](https://reactjs.org/docs/react-api.html#cloneelement) method to pass the props to each children.

This example shows you how to pass props to a `this.props.children` in react.

```js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const Child = props => {
  return (
    <div>
      <h1>Child {props.index}</h1>
      <button onClick={() => props.logMe()}>Log</button>
    </div>
  );
};

class App extends Component {
  logMe = () => {
    console.log("Hii child");
  };

  render() {
    const updateChildrenWithProps = React.Children.map(
      this.props.children,
      (child, i) => {
        return React.cloneElement(child, {
        //this properties are available as a props in child components
          logMe: this.logMe,
          index: i
        });
      }
    );

    return <div className="App">{updateChildrenWithProps}</div>;
  }
}

ReactDOM.render(
  <App>
    <Child />
    <Child />
  </App>,
  document.getElementById("root")
);
```
