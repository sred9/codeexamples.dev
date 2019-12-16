---
title: How to split a string in Java
date: "2019-12-17"
tags: ['java','string','split']
template: post
---

To split a string we need to use the `String.split()` method by passing a regular expression as an argument in Java.

Here is an example which splits the string by a delimiter dot `.`

```java
String name = "code.examples";

String[] output = name.split("\\."));

System.out.println(output[0]);
System.out.println(output[1]);
```

Output:

```java
code
examples
```

>Note: The period/dot is a special character in regex so that we have used double backslashes (`\\`) to escape it.

Other example:

```java
String phone = "1334-345-5465";

String[] output = phone.split("-");

System.out.println(output[0]);
System.out.println(output[1]);
System.out.println(output[2]);
```

Output:

```java
1334
345
5465
```
