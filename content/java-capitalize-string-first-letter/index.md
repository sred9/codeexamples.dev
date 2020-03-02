---
title: How to capitalize the String first letter in Java
date: "2020-03-02"
tags: ['java','capitalize','string']
template: post
---

To capitalize the first letter of a string we can use the __substring()__ method chaining with __toUpperCase()__ method in Java.

Here is an example:

```java
public class Main
{
	public static void main(String[] args) {
	    String name  = "beauty";
        name = name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase();
		System.out.println(name);
	}
}
```

Output:

```java
Beauty
```
