---
title: How to check if a string contains another string in Objective-C
date: "2019-12-21"
tags: ['objective-c','string','contains','substring','ios']
template: post
---

To check if a string contains another string in objective-c we can use the `rangeOfString:` where it returns the `{NSNotFound, 0}` if a 'searchString' is not found.

Here is an example:

```objectivec

NSString *string = @"we love coding";

if ([string rangeOfString:@"love"].location == 0) {
  NSLog(@"string does not contain love");
} else {
  NSLog(@"string contains love!");
}
```

Output:

```objectivec
string contains love!
```
