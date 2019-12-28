---
title: How to split a string into an array in Swift
date: "2019-12-29"
tags: ['swift','split','string','array']
template: post
---

To split a string into an array of individual characters, we can use the `components(separatedBy:)`
method in swift.

Here is an example, which splits the string by a comma (`,`).

```swift
import Foundation

let str = "A,B,C,D"
let array = str.components(separatedBy:",")

print(array)
```

Which returns the array of 4 characters.

```output
["A", "B", "C", "D"]
```
