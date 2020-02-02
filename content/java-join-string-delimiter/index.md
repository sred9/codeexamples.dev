---
title: How to join strings with Delimiter in Java
date: "2020-02-02"
tags: ['java','join','string','delimiter']
template: post
---

To join strings with delimiter we can use the `String.joiner()` method in Java.

Here is an example that joins the given strings with a delimiter `-`.

```java
public class Main
{
      public static void main(String[] args) {
        String all = String.join("-","01","02","2020");
        System.out.println(all);
   }
}
```

Output:

```java
01-02-2020
```

Similarly, in Java 8 we can also use [StringJoiner](https://docs.oracle.com/javase/8/docs/api/java/util/StringJoiner.html) class.

```java
import java.util.StringJoiner;

public class Main
{
	public static void main(String[] args) {
	    StringJoiner all = new StringJoiner("-");
        all.add("1").add("02").add("2020");
		System.out.println(all); // 01-02-2020
	}
}
```
