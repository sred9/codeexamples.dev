---
title: How to concatenate strings in Java
date: "2019-12-18"
tags: ['java','strings','concatenation']
template: post
---

To concatenate strings we need to use plus `+` operator in Java.

In this below example, we are concatenating two strings by using `+` operator.

```java
String first = "Code";
String last  =  "examples";

String combine = first + last;

System.out.println(combine);
```

Output:

```java
Codeexamples
```

## Using concat() method

Similarly, you can also use the `concat()` method to concatenate one string with another string.

```java
String name = "Code";

System.out.println(name.concat("Java"));
```

Output:

```java
Codejava
```
