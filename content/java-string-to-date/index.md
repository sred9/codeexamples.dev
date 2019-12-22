---
title: How to convert String to Date in Java
date: "2019-12-23"
tags: ['java','convert','string','date']
template: post
---

To convert a string to date we can use the `SimpleDateFormat` class in Java.

Here is an example, which converts the string to date of a format `yyyy-mm-dd`.

```java{9-10,14}
import java.util.Date;
import java.text.SimpleDateFormat;
import java.text.ParseException;

public class Main
{
   public static void main(String[] args) {

            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-mm-dd");
            String dateInString = "2020-01-12";

        try {

            Date date = formatter.parse(dateInString);
            System.out.println(date);
            System.out.println(formatter.format(date));

        } catch (ParseException e) {
            e.printStackTrace();
        }
   }
}
```

Output:

```java
Sun Jan 12 00:01:00 UTC 2020

2020-01-12
```

## Resource links

1. [Date and Time Patterns](https://docs.oracle.com/javase/6/docs/api/java/text/SimpleDateFormat.html)
