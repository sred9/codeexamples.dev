---
title: React Hello World Example
date: "2019-12-06"
tags: ['react']
template: post
---

This below example, will help you to display hello world in the webpage using react.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>React Hello world</title>
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.21.1/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">

   ReactDOM.render(<h1>Hello, world!</h1>,
   document.getElementById('root'));

  </script>

</body>
</html>
```
