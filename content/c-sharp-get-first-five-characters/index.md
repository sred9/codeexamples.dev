---
title: How to get first five characters from a string in C#
date: "2020-02-07"
tags: ['c-sharp','characters','string','asp']
template: post
---

To get the first five characters from a string we can use the `Substring()` method by passing the `0,5` as an arguments.

Here is an example that gets the first 5 characters from a given string

```csharp
 string mystring = "Hellopeople";
 string firstFive =  mystring.Substring(0,5);

 Console.WriteLine(firstFive);
```

Output:

```csharp
Hello
```
