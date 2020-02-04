---
title: How to get the last number from a String in C#
date: "2020-02-04"
tags: ['c-sharp','number','string']
template: post
---

To get the last number from a string we can use the `Split(' ')` method in C#.

Here is an example:

```csharp
using System;

class LastNumber {
  static void Main() {
      string name = "Hello 1";
      string[] words = name.Split(' ');
      Console.WriteLine(words[words.Length - 1]);
  }
}
```

Output:

```csharp
1
```
