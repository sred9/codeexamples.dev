---
title: How to sort an array of numbers in Swift
date: "2019-12-12"
tags: ['swift','ios','arrays','sorting']
template: post
---

Swift has a built-in `sort()` method by using that we can sort an array both ascending and descending order.

## Sort array in ascending order

```swift
var numbers = [3,54,1,5,2];

numbers.sort() // sorting

print(numbers)
```

Output:

```swift
[1,2,3,5,54]
```

## Sort array in descending order

To sort an array in descending order we need to pass `by: >` as an argument to the `sort()` method.

```swift
var numbers = [3,54,1,5,2];

numbers.sort(by: >) // sorting descending order

print(numbers)
```

Output:

```swift
[54,5,3,2,1]
```
