---
title: How to trim whitespaces from a string in Swift
date: "2019-12-14"
tags: ['swift','strings','ios']
template: post
---

To remove the leading and trailing white spaces in a string we need to use
the `trimmingCharacters(in:)` method by passing a `whitespaces`character set
offered by the swift.

Example:

```swift
let str = "  Oxygen    "
let trimmedStr = str.trimmingCharacters(in: .whitespaces)

print(trimmedStr)
```

Output:

```swift
Oxygen
```

## Links

[Learn more about trimmingCharacters(in:) method](https://developer.apple.com/documentation/foundation/nsstring/1415462-trimmingcharacters)