---
title: How to reverse a string in Swift
date: "2019-12-12"
tags: ['swift','reverse','strings','ios']
template: post
---


In Swift, we have a built-in `reversed() method by using that we can reverse a string.

```swift
let str = "how are you"

let reversedString = String(str.reversed())

print(reversedString)
```

Output:

```swift
uoy era woh
```

## Reversing string using for loop

Similarly, we can also reverse a string using the `for` loop.

```swift
let str = "how are you"

var reversedString = ""

// looping through each character
for char in str {
  reversedString = "\(char)" + reversedString
}

print(reversedString)
```

Output:

```swift
uoy era woh
```
