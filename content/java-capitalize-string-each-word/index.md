---
title: How to capitalize the String first letter of each word in Java
date: "2020-03-02"
tags: ['java','capitalize','string','firstletter','each']
template: post
---

This below example will show you, how to capitalize the first letter of a each word in a given string
Java.

```java
public class Main
{
 public static String toTitleCase(String word){
    return Character.toUpperCase(word.charAt(0)) + word.substring(1);
}

public static void main(String[] args){
    String phrase = "you can see me first letter capital";
    String[] splitPhrase = phrase.split(" ");
    String result = "";

    for(String word: splitPhrase){
        result += toTitleCase(word) + " ";
    }
    System.out.println(result.trim());
 }
}
```

Output:

```java
You Can See Me First Letter Capital
```
