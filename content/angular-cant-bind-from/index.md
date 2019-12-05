---
title: Can't bind to formGroup since it isn't a known property of form
date: "2019-12-05"
tags: ['angular']
template: post
---

In angular, we'll get this type of errors if we forgot to add `FormsModule` inside  `app.module.ts`
file and trying to use `form` properties inside components.

We can solve this problem by importing the `FormsModule` and `ReactiveFormsModule` from `@angular/forms` package and added it to the `imports` array inside your `app.module.ts` file.

```js:title=app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
