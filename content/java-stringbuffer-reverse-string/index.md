---
title: How to reverse a string using StringBuffer class in Java
date: "2019-12-18"
tags: ['java','reverse','string']
template: post
---

Java offers us a `StringBuffer` class by chaining it with `reverse()` method and `toString()` method
we can reverse a string.

Here is an example:

```java
String string="oops";

String reverse = new StringBuffer(string).reverse().toString();

System.out.println(reverse); // it prints reverse string
```

Output:

```java
spoo
```
