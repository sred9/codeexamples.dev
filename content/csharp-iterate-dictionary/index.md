---
title: How to iterate over a dictionary in C#
date: "2019-12-11"
tags: ['c sharp','iterate','loop','dictionary']
template: post
---

There are different ways available to iterate over a dictionary in c#.

In this below example, we are using `foreach` to iterate over a `codeDictionary` and prints available
`key`-`value` to the console.

```csharp
foreach(var item in codeDictionary)
{
   Console.WriteLine("{0} = {1}", item.Key, item.Value);
}
```

## Old way using for loop

```csharp
for (int i = 0; i < codeDictionary.Count; i++ )
 {                             // key, value
    Console.WriteLine("{0} = {1}", i, codeDictionary[i]);

 }
```
