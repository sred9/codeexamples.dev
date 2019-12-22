---
title: How to count number of occurrences of a character in String C#
date: "2019-12-23"
tags: ['c sharp','linq','count','string','character']
template: post
---

To count the number of occurrences of a character in a string, we can use the LINQ in C#.

Here is an example that counts the number of occurrences of a character exclamation `!` in a given string.

```csharp{7}
using System;
using System.Linq;

class CountCharacters {
  static void Main() {
      string mystr = "Hello! world ! ok !";
      int count = mystr.Count(f => f == '!');
      Console.WriteLine(count);
  }
}
```

Output:

```csharp
3
```

Similarly, you can use the `Split()` method if you don't like using LINQ.

```csharp
using System;

class CountCharacters {
  static void Main() {
      string mystr = "Hello! world ! ok !";
      int count = mystr.Split('!').Length - 1;
      Console.WriteLine(count);
  }
}
```
