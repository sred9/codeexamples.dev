---
title: How to create a multiline string in C#
date: "2019-12-22"
tags: ['c sharp','multiline-string','string']
template: post
---

To create a multiline string in C#, we can use the `@` symbol in front of a string.

Here is an example:

```csharp
// literal

using System;

class Demo {
  static void Main() {

      string str = @"You can,
        see me in
        Multiple lines";

    Console.WriteLine(str);
  }
}
```

Output:

```csharp
You can,
        see me in
        Multiple lines
```
