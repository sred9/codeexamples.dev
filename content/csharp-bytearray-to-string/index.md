---
title: How to convert Byte array (UTF-8) to a string in C#
date: "2019-12-22"
tags: ['c sharp','byte','array','string']
template: post
---

To convert a byte array to a string, we can use the `UTF8.GetString()` method in C#.

Here is an example that converts Byte array into a string `ABCD`.

```csharp
using System;

class DemoBytes{
  static void Main() {
      byte[] bytes = { 65, 66, 67, 68 };

      string s1 = System.Text.Encoding.UTF8.GetString(bytes);

      Console.WriteLine(s1);
  }
}
```

Output:

```csharp
ABCD
```
