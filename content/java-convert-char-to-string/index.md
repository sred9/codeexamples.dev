---
title: Converting char to string in Java
date: "2019-12-23"
tags: ['java','convert','char','string']
template: post
---

In java we can use the `String.valueOf()` method to convert a char to string.

Here is an example that converts char `p` to a string.

```java
public class Main
{
   public static void main(String[] args) {
         char ok='p';
         String str = String.valueOf(ok);
         System.out.println(str);
  }
}
```

Output:

```java
p
```

Similarly, you can use the string concatenation.

```java
public class Main
{
   public static void main(String[] args) {
         char ok='p';
         String str = ""+ok;
         System.out.println(str);
  }
}
```
