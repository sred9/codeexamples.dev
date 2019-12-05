---
title: Angular HTML binding
date: "2019-12-05"
tags: ['angular']
template: post
---

This example shows you how to bind html in angular.

```html
<div [innerHTML]="htmlString"></div>
```

In your component you need to define `htmlString` property.

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  htmlString= "<h1>Hello angular</h1><p>good to see</p>";
}
```
