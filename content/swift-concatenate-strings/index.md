---
title: How to concatenate two strings in Swift
date: "2019-12-14"
tags: ['swift','ios','strings']
template: post
---

Swift offers us three different ways to concatenate or joining strings.

## First way `+` operator

We can use the `+` operator to concatenate two strings in swift.

```swift
let first = "yes "
let second = "boss"
let combined = fist + second
```

## Second-way interpolation

```swift
let first = "yes"
let second = "boss"
let combined = "\(first) \(second)"
```

## Third way `+=` operator

```swift
let name = "john"

name += 'doe'
```
