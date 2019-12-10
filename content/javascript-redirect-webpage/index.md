---
title:  How to redirect to another Webpage in JavaScript
date: "2019-12-10"
tags: ['javascript','redirect']
template: post
---

This example will show you how to redirect to another webpage in JavaScript by using `location.replace` and `location.href`.

```js
// it stimulates HTTP redirect
window.location.replace("https://reactgo.com");

// it stimulates mouse click on a link
window.location.href = "https://reactgo.com";
```

The main difference between `location.replace` and `location.href` is `replace()` removes the URL history from a document and `href` doesn't remove the history so that we can go back to the previously visited page.
