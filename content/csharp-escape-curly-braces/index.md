---
title: How to escape curly braces in String.format C#
date: "2019-12-23"
tags: ['c sharp','string','interpolation']
template: post
---

To escape curly braces and interpolate a string inside the `String.format()` method use triple curly braces `{{{ }}}`.

Here is an example:

```csharp{7}
using System;

class EscapeDemo {

  static void Main() {
      string val = "1, 2, 3";
      string output =String.Format(" My values are {{{0}}}", val);
      Console.WriteLine(output);
  }
}
```

Output:

```csharp
 My values are {1, 2, 3}
```

Similarly, you can also use the c# string interpolation feature instead of String.format().

```csharp{7}
using System;

class EscapeDemo {

  static void Main() {
      string val = "1, 2, 3";
      string output = $" My values are {{{val}}}";
      Console.WriteLine(output);
  }
}
```
