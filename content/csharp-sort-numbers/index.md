---
title: How to sort an array of numbers in C#
date: "2019-12-12"
tags: ['c sharp','arrays','sorting','numbers']
template: post
---

In this example, you will learn about how to sort an array of numbers both ascending and descending order in C# by using a built-in `sort()` method.

## Sorting array of numbers in ascending order

By default, the `sort()` method sorts the array in ascending order.

```csharp
using System;

public class SortProgram
{
    public static void Main()
    {
        // intializing new array
        int[] myArr= new int[5] {1,5,3,8,21};

         // sorting array in ascending order
        Array.Sort(myArr);

        foreach (int val in myArr)
            { // printing the each sorted value
              Console.WriteLine(val);
            }
    }
}
```

Output:

```csharp
1
3
5
8
21
```

## Sorting array of numbers in descending order

For descending order, we need to use the `Array.Reverse()` method.

```csharp
using System;

public class SortProgram
{
    public static void Main()
    {
        // intializing new array
        int[] myArr= new int[5] {1,5,3,8,21};


        Array.Sort(myArr);
        Array.Reverse(myArr); // sorting in descending order

        foreach (int val in myArr)
            { // printing the each sorted value
              Console.WriteLine(val);
            }
    }
}
```

Output:

```csharp
21
8
5
3
1
```
