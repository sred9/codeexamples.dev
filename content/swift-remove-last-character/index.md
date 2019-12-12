---
title: How to remove last character from a string in Swift
date: "2019-12-12"
tags: ['swift','ios','strings']
template: post
---

To remove the last character from a string we need to use the `removeLast()` method in swift.

Here is an example that removes the last character` from a string.

```swift
var str = "Fun World"

str.removeLast()

print(str)
```

Output:

```swift
Fun Worl
```

>Note: The `removeLast()` method modifies the original string.

Swift version: 5.1
