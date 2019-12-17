---
title: How to get the length of a string in Java
date: "2019-12-18"
tags: ['java','string','length']
template: post
---

To get a length of a string we can use the built-in `length()` method in Java.

Here is an example:

```java
String name = "corejava" ;

System.out.println(name.length()); // 8
```

Similary, you can also use `toCharArray().length`.

```java
String name = "corejava" ;

System.out.println(name.toCharArray().length); // 8
```
