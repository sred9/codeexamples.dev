---
title: How to remove first and last character from a string in Java
date: "2019-12-17"
tags: ['java','character','string']
template: post
---

To remove the first and last character from a string we need to use the `substring()` method by passing `1` as a first argument and `string.length()-1` as the second argument in Java.

Here is an example, which removes the first character `h` and last character `o` from a string.

```java
String str = "hello";

System.out.println(str.substring(1,str.length() - 1));
```

Output:

```java
ell
```
