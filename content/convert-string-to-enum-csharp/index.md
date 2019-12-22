---
title: How to convert a string to enum in C#
date: "2019-12-23"
tags: ['c sharp','convert','string','enum']
template: post
---

To convert a string to enum, we can use the `Enum.parse()` method in C#.

Here is an example:

```csharp
using System;

class ConvertEnum {
     enum Vehicle { Bus = 14, Lorry = 2, Car = 34 };
     static void Main() {
      Vehicle name= (Vehicle)Enum.Parse(typeof(Vehicle), "Bus");
     System.Console.WriteLine(name);
  }
}
```

Output:

```csharp
Bus
```
