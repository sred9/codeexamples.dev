---
title: How to check if String contains case insensitive in C#
date: "2019-12-11"
tags: ['c sharp','contains','string','case-insensitive']
template: post
---

We can check if a string contains a substring which is case insensitive by using the `String.IndexOf` Method and pass `StringComparison.OrdinalIgnoreCase` as the type of search to use.

Example:

```csharp
string title = "How are YOU";
bool contains = title.IndexOf("you", StringComparison.OrdinalIgnoreCase) >= 0;
```

## Defining CaseInsenstive method

We can also define our `CaseInsenstive` method like this.

```csharp
public static class Extensions
{
    public static bool CaseInsensitive(this string text, string value,
        StringComparison stringComparison = StringComparison.CurrentCultureIgnoreCase)
    {
        return text.IndexOf(value, stringComparison) >= 0;
    }
}
```

Usage:

```csharp
string title = "How are YOU";
bool contains = title.CaseInsensitive('you');
```
