---
title: How to remove last character from a string in Java
date: "2019-12-17"
tags: ['java','string','character']
template: post
---

To remove the last character from a string we need to use the `substring()` method by passing `0` as a first argument and `string.length()-1` as the second argument in Java.

Here is an example, which removes the last character `o` from a string.

```java
String str = "hello";

System.out.println(str.substring(0,str.length() - 1));
```

Output:

```java
hell
```
