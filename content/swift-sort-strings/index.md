---
title: How to sort an array of strings in Swift
date: "2019-12-12"
tags: ['swift','arrays','strings','sorting','ios']
template: post
---

Swift has a built-in `sorted()` method by using that we can sort an array of strings.

## Sorting array in ascending order

Here is an example of sorting an array of `fruits` in ascending order.

```swift{3}
let fruits = ["grapes", "watermelon", "apple", "kiwi"]

let sortedFruits = fruits.sorted()

print(sortedFruits)
```

Output:

```swift
["apple", "grapes", "kiwi", "watermelon"]
```

## Sorting array in descending order

To sort an array of strings in descending order we need to pass `by: >` as an argument to the `sorted()` method.

```swift{3}
let fruits = ["grapes", "watermelon", "apple", "kiwi"]

let sortedFruits = fruits.sorted(by: >)

print(sortedFruits)
```

```swift
["watermelon", "kiwi", "grapes", "apple"]
```
