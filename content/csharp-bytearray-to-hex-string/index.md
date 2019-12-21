---
title: How to convert byte array to a hex string in C#
date: "2019-12-22"
tags: ['c sharp','byte','array','hex','string']
template: post
---

This below example will help you to convert a byte array to a hexadecimal string in C#.

## Using `BitConverter.toString()` method

```csharp
using System;

class ByteArraytohex{
  static void Main() {
  byte[] bytes = { 65, 66, 67, 68 };

  string s1 = BitConverter.ToString(bytes).Replace("-","");;

    Console.WriteLine(s1);
  }
}
```

Output:

```csharp
41424344
```
