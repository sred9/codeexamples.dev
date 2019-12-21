---
title: How to convert ArrayList to string array in Java
date: "2019-12-22"
tags: ['java','convert','arraylist','string']
template: post
---

To convert an ArrayList to a string array in Java, we can use the `toArray()` method by passing `new String[0]` as an argument to it.

Here is an example:

```java
List<String> list = new ArrayList<String>();

//adding data to list

list.add("car");

list.add("bike");

list.add("cycle");


String[] stringArray = list.toArray(new String[0]);
```
