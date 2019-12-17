---
title: How to compare the two strings in Java
date: "2019-12-18"
tags: ['java','compare','strings']
template: post
---

In Java, we can compare the two strings by using a double equals (`==`) operator.

Here is an example, which compares the `first` string with the `second` string.

```java
String first =  "code";
String  second = "code";

System.out.println(first == second); // true
```

Similar, you can also use the `equals()` method to compare two strings in java.

```java
String first =  "code";
String  second = "code";

System.out.println(first.equals(second)); // true
```
