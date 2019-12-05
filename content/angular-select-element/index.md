---
title: How to select an element in Angular component
date: "2019-12-05"
tags: ['angular']
template: post
---

Consider we have a input element like this in our angular html file.

```html
<input placeholder="name"/>
```

To acess this above element data inside the component we can do it like this.

First add a `#myname` reference to the `input` element.

```html
<input placeholder="name" #myname />
```

Now import `ElementRef`,`ViewChild` from the `@angular/core` and access the `input` element by using the reference.

```js
import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('myname') input:ElementRef;

  ngAfterViewInit() {
    console.log(this.input.nativeElement.value);
  }
}
```
