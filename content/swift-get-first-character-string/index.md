---
title: How to get the first character from a string in Swift
date: "2019-12-14"
tags: ['swift','xcode','ios','strings']
template: post
---

To get the first character from a string we need to use the `string.first` property in swift.

Example:

```swift
let name = "polo"

if let firstChar = name.first {
    print(firstChar)
}

// Prints "p"
```

## Resource links

[Swift- first property docs](https://developer.apple.com/documentation/swift/string/2894206-first)