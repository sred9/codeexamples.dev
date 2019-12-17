---
title: How to convert a integer to a string in Java
date: "2019-12-18"
tags: ['java','string','integer']
template: post
---

To convert a integer to a string we need to use the `toString()` method in Java.

Here is an example:

```java
Integer num = 124;

String strNumber = num.toString();

System.out.println(strNumber);
```

Output:

```java
124
```

Similary you can also convert by just adding empty string `""` infront of a number.

```java
Integer num = 332;

String strNumber = "" + num ;

System.out.println(strNumber); // 332
```
