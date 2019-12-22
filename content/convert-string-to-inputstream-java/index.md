---
title: How to convert a string to inputstream in Java
date: "2019-12-23"
tags: ['java','convert','string','inputstream']
template: post
---

To convert a string to inputStream, we can use the [`ByteArrayInputStream`](https://docs.oracle.com/javase/7/docs/api/java/io/ByteArrayInputStream.html) class in Java.

Here is an example that converts string `hello` to inputStream.

```java
import java.io.InputStream;
import java.io.ByteArrayInputStream;
import java.nio.charset.StandardCharsets;

public class Main
{
    public static void main(String[] args) {

            String myString = "hello";
            InputStream stream = new ByteArrayInputStream(myString.getBytes(StandardCharsets.UTF_8));
            System.out.println(stream);
    }
}
```

## Resources

1. [How to convert an InputStream to a string in Java](/convert-inputstream-string-java/)