---
title: How to split a String by Space in Java
date: "2020-02-02"
tags: ['java','split','string','space']
template: post
---

To split a string by space we can use the `String.split()` method by passing a regex `\\s+` as an first argument in Java.

Here is an example.

```java
import java.util.Arrays;

public class Main
{
	public static void main(String[] args) {
	    String str = "You can see me";
        String[] splited = str.split("\\s+");
		System.out.println(Arrays.toString(splited));
	}
}
```

Output:

```java
[You, can, see, me]
```
