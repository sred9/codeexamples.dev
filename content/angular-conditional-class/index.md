---
title: How to conditionally add classes in Angular using *ngClass
date: "2019-12-05"
tags: ['angular']
template: post
---

Angular offers us different ways to add classes conditionally to the html elements.

## First way

```html
[class.my-class]="step=='step1'"
```

## Second way

```html
[ngClass]="{'my-class': step=='step1'}"
```

## Third way

```html
[ngClass]="(step=='step1')?'my-class1':'my-class2'"
```

## Adding multiple classes

```html
[ngClass]="{'my-class': step=='step1', 'my-class2':step=='step2' }"
```
