---
title: How to join an array of strings into a string in Java
date: "2019-12-18"
tags: ['java','strings','array']
template: post
---

To join an array of strings into a single string we can use the `join()` method in Java.

In this below example, we are joining each string in an array without any delimiter.

```java
String[] array = new String[] { "how", "are", "you" };

String joined = String.join("", array);

System.out.println(joined);
```

Output:

```java
howareyou
```

If you want a string which is separated by the delimiter like comma `,` you need to specify in the join() method.

```java
String[] array = new String[] { "how", "are", "you" };

String joined = String.join(",", array);

System.out.println(joined);
```

```java
how,are,you
```
