---
title: How to get last four characters from a string in C#
date: "2020-02-06"
tags: ['c-sharp','characters','string']
template: post
---

To get the last four characters from a string we can use the `Substring()` method by passing the `string.length-4` as an argument.

Here is an example that gets the last four characters from a given string

```csharp
 string mystring = "Hellopeople";
 string lastFour =  mystring.Substring(mystring.Length - 4);

 Console.WriteLine(lastFour);
```

Output:

```csharp
ople
```
