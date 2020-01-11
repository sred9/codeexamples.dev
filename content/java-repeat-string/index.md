---
title: How to repeat a string n times in Java
date: "2020-01-11"
tags: ['java','repeat','string']
template: post
---

In Java 11, we have a built-in [`String.repeat()`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html#repeat(int)) method by using that we can repeat a string `n` times.

Here is an example that repeats the string `'fox'` 5 times.

```java
public class Main
{
    public static void main(String[] args)
    {
        String str = "fox";
        String repeatedVal = str.repeat(5);
        System.out.println(repeatedVal);
    }
}
```

Output:

```java
foxfoxfoxfoxfox
```
