---
title: React Set focus on the input field after render
date: "2019-12-07"
tags: ['react']
template: post
---

In this example, you will learn how to set a focus to the input field after the component is rendered.

```js{5,11}
import React,{Component} from 'react';

class App extends Component{
  componentDidMount(){
    this.nameInput.focus();
  }
  render() {
    return(
      <div>
        <input
          ref={(inputEl) => this.nameInput = inputEl}
        />
      </div>
    );
  }
}
```

In the above code, we have used [callback refs](https://reactgo.com/access-dom-nodes-using-refs/#callback-refs) to access the input element and `componentDidmount()` lifecycle method is used to
set the focus to the input field after render.
