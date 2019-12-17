---
title: How to reverse a string in Java using for loop
date: "2019-12-18"
tags: ['java','reverse','string','loops']
template: post
---

This below example, will show you how to reverse a string in java by using the for loop.

```java
String name = "codejava";

// converting string into array of characters
char [] ch= name.toCharArray();

String reverse = ""; // initializing empty string

for(int i=0;i<ch.length;i++){
   // looping through each character and adding it to reverse variable
    reverse = ch[i]+reverse;
}

System.out.println(reverse); // printing the reverse string
```

Output:

```java
avajedoc
```
