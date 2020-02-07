---
title: How to get first three characters from a string in C#
date: "2020-02-07"
tags: ['c-sharp','characters','string','asp']
template: post
---

To get the first three characters from a string we can use the `Substring()` method by passing the `0,3` as an arguments.

Here is an example that gets the first 3 characters from a given string

```csharp
 string mystring = "Hellopeople";
 string firstThree =  mystring.Substring(0,3);

 Console.WriteLine(firstThree);
```

Output:

```csharp
Hel
```
