---
title: How to parse a string into a nullable int in C#
date: "2020-02-06"
tags: ['c-sharp','parse','string','int']
template: post
---

To parse a string into a nullable int we can use the `int.TryParse()` method in c#.

Here is an example:

```csharp
public static int? ToNullableInt(this string s)
{
    int i;
    if (int.TryParse(s, out i)) return i;
    return null;
}
```
