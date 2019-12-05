---
title: How to Programmatically navigate using react router
date: "2019-12-06"
tags: ['react']
template: post
---

The new version of React router offers us `useHistory` hook which helps us to navigate programmatically to the other route.

Example:

```js
import React from 'react';
import { useHistory } from "react-router-dom";

function HomeButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go to home
    </button>
  );
}
```

Inside class based components you can do it like this.

```js
import React from 'react'

class App extends React.Component {
  gotoHome = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <button onClick={this.gotoHome}>Submit</button>
      </div>
    )
  }
}

export default App;
```
