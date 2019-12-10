---
title: How to enumerate an enum in c#
date: "2019-12-11"
tags: ['c sharp','enums','iterate','enumeration']
template: post
---

We can use `enum.GetNames()` to enumerate through a enum in c#.

```csharp
public enum Fruits
{
    Orange,
    Grapes,
    Apple
}

public void PrintAllFruits()
{
    foreach (string fruit in Enum.GetNames(typeof(Fruits)))
    {
        System.Console.WriteLine(fruit);
    }
}
```

In the above example, we are iterating through a `Fruits` enum and printing each enum in the console.

## Iterating through enum values

If you want enum values instead of names you need to use `enum.GetValues()` method.

```csharp
public void PrintAllFruits()
{
    foreach (string fruit in Enum.GetValues(typeof(Fruits)))
    {
        System.Console.WriteLine(fruit);
    }
}
```
