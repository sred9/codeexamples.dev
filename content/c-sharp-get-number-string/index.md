---
title: How to get the number from a String in C#
date: "2020-02-04"
tags: ['c-sharp','number','string','regex']
template: post
---

To get the number from a string we can use the regex with a `\d+` flag in C#.

Here is an example that gets the number 2 from the below string.

```csharp
using System;
using System.Text.RegularExpressions;

class HelloWorld {
  static void Main() {
      string name = "Hello 2 World";
      string num = Regex.Match(name, @"\d+").Value;
      Console.WriteLine(num);
  }
}
```

Output:

```csharp
2
```
