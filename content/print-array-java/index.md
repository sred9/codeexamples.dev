---
title: How to print an array in Java
date: "2019-12-17"
tags: ['java','print','array']
template: post
---

To  print an array in java we need to use the [`Array.toString()`](https://docs.oracle.com/javase/9/docs/api/java/util/Arrays.html#toString-int:A-) method.

Here is an example:

```java
String[] array = new String[] {"king", "queen", "pop"};

System.out.println(Arrays.toString(array));
```

Output:

```java
[king, queen, po]
```

## Nested arrays

For nested arrays you can use `Arrays.deepToString()` method.

```java

String[][] deepArray = new String[][] {{"king", "queen"}, {"olive", "pop"}};

System.out.println(Arrays.deepToString(deepArray));

```

Output:

```java
[[king, queen], [olive, pop]]
```
