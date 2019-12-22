---
title: How to create a comma separated string from List string in C#
date: "2019-12-23"
tags: ['c sharp','string','lists']
template: post
---

To create a comma separated string from a list string, we can use the `String.join()` method in
C#.

Here is an example that converts `myList` to `commaString`.

```csharp
using System;
using System.Collections.Generic;

class ConvertEnum {
 static void Main() {

  IList<string> myList = new List<string>{"Hello","1","testing","2"};
  string commaString = string.Join(",", myList);

     System.Console.WriteLine(commaString);
  }
}
```

Output:

```csharp
Hello,1,testing,2
```
