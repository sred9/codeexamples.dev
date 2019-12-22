---
title: How to check if a given string is number in Java
date: "2019-12-23"
tags: ['java','check','string','numeric']
template: post
---

To check whether a given string is number or not, we can use the `string.chars().allMatch()` method where it returns true if a string is number else it returns false.

Here is an example:

```java{6}
public class Main
{
    public static void main(String[] args) {

            String myString = "9291";
            boolean isNumeric = myString.chars().allMatch( Character::isDigit );

            if(isNumeric)
            System.out.println(myString + " is a number");
          else
            System.out.println(myString + " is not a number");
    }
}
```

Output:

```java
9291 is a number
```

## False case

```java{6}
public class Main
{
    public static void main(String[] args) {

            String myString = "hello fashion";
            boolean isNumeric = myString.chars().allMatch( Character::isDigit );

            if(isNumeric)
            System.out.println(myString + " is a number");
          else
            System.out.println(myString + " is not a number");
    }
}
```

Output:

```java
hello fashion is not a number
```
