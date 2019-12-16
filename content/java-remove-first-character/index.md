---
title: How to remove first character from a string in Java
date: "2019-12-17"
tags: ['java','string','character']
template: post
---

To remove the first character from a string we need to use the `substring()` method by passing `1` as an argument in Java.

Here is an example, which removes the first character `h` from a string.

```java
String str = "hello";

System.out.println(str.substring(1));
```

Output:

```java
ello
```
