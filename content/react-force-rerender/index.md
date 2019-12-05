---
title: How to Force react component to re-render
date: "2019-12-06"
tags: ['react']
template: post
---

To force a react component to re-render we need to call `this.forceUpdate()` method.

Example:

```js
class App extends React.Component {

  handleUpdate = () => {
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <h1>{Math.random()}</h1>
        <button onClick={this.handleUpdate}>Update</button>
      </div>
    );
  }
}
```
