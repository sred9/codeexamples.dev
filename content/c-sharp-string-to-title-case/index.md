---
title: How to convert a string into a title case in C#
date: "2020-03-02"
tags: ['c-sharp','convert','string','titlecase']
template: post
---

To convert a string to titlecase we can use the [TextInfo.ToTitleCase(String)](https://docs.microsoft.com/en-us/dotnet/api/system.globalization.textinfo.totitlecase?redirectedfrom=MSDN&view=netframework-4.8#System_Globalization_TextInfo_ToTitleCase_System_String_) method in c#.

Here is an example:

```csharp
using System;
using System.Globalization;

class HelloWorld {
  static void Main() {
     String text = "hello world";
     String titleCase=  new CultureInfo("en").TextInfo.ToTitleCase(text.ToLower());
     Console.WriteLine(titleCase);
  }
}
```

Output:

```csharp
Hello World
```
