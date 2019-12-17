---
title: How to convert a string to char array in Java
date: "2019-12-18"
tags: ['java','character','string','array']
template: post
---

To convert a string into a character array we can use the `toCharArray()` method in Java.

Here is an example:

```java
String name = "codejava";
char [] chArray= name.toCharArray();

for (char value : chArray) {
      System.out.println(value); // printing each character in array
    }
}
```

Output:

```java
c
o
d
e
j
a
v
a
```
