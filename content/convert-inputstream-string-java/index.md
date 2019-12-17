---
title: How to convert an InputStream to a string in Java
date: "2019-12-18"
tags: ['java','stream','input stream','io','string']
template: post
---

This below example will show you how to convert an `InputStream` to a `String` by using apache commons  [IOUtils](http://commons.apache.org/proper/commons-io/javadocs/api-2.4/org/apache/commons/io/IOUtils.html#toString%28java.io.InputStream,%20java.lang.String) class.

```java
String myString = IOUtils.toString(myInputStream, "UTF-8");
```

Where `UTF-8` is a character encoding.

Similarly, you can also use the `CharStreams` Guava.

```java
String myString = CharStreams.toString(new InputStreamReader(
      inputStream, Charsets.UTF_8));
```
