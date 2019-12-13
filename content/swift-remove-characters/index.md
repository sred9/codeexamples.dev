---
title: How to remove particular character from a string in Swift
date: "2019-12-14"
tags: ['swift','strings','ios']
template: post
---


Swift has a built-in `remove()` method by using that we can remove the character from a string at a specified position.

In this below example, we are removing exclamation mark (!) from a given string.

```swift
var title  = "Play with! swift"
if let i = title.firstIndex(of: "!") {
    title.remove(at: i) // i is character index
}
print(title)
```

Output:

```swift
Play with swift
```
