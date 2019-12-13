---
title: How to get an index of a character in Swift String
date: "2019-12-14"
tags: ['swift','xcode','ios','strings']
template: post
---

In swift, we can use the `firstIndex(of:)` method to get the `index` position of a character in a given string.

In this below example, we are finding an `l` character index.

```swift
var msg = "hold"
if let i = msg.firstIndex(of: "l") {
   print(i.utf16Offset(in:msg)) // prints character index 2
}else{
   print("not found")
}

// prints 2
```

> Swift 5 replaces `encodedOffset` with `utf16Offset(in:)`.
