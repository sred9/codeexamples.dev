---
title: How to create a multiline string in Java
date: "2020-01-20"
tags: ['java','multiline','string']
template: post
---

To create a multiline string in Java, we can use the `join()` method by passing  `/n` as a first argument.

Here is an example:

```java
public class Main
{
   public static void main(String[] args) {


   String s = String.join("\n",
           "This is the way we can",
           "create a multiline string",
           "in java"
         );

   System.out.println(s);
  }
}
```

Output:

```java
This is the way we can
create a multiline string
in java
```
