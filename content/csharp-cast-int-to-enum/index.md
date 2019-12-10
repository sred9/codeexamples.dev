---
title: How to cast int to enum in c#
date: "2019-12-11"
tags: ['c sharp','enums','casting']
template: post
---

The below example will show how to cast an `int` to `enum` in c#.

```csharp
public enum MyEnum : int
{
    Apple = 1,
    Grapes = 2,
    Bananna = 3
}

static void Main(string[] args)
{
    var e1 = (MyEnum)1; // Apple
    var e2 = (MyEnum)2; // Grapes

    Console.WriteLine("{0} {1}", e1, e2);
    Console.ReadLine();
}
```
