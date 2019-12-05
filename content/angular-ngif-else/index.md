---
title: Using *ngIf else in Angular
date: "2019-12-05"
tags: ['angular']
template: post
---

This below example will show you how to use `*ngIf` else in Angular.

```html
<div *ngIf="isActive;else other_content">
    content here ...
</div>

<ng-template #other_content>other content here...</ng-template>
```

In the above code, if `isActive` property is true it will render the content inside `div` block else
it will render the content inside `ng-template` block.

>The HTML `<template>` element is a mechanism for holding client-side content that is not to be rendered when a page is loaded but may subsequently be instantiated during runtime using JavaScript.
