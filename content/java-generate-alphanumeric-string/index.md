---
title: How to generate the random alphanumeric string in Java
date: "2019-12-20"
tags: ['java','generate','alphanumeric','string']
template: post
---

This below example will help you to generate a random alphanumeric string of the specific length in
by using the `Math.random()` method in Java.

```java{23}
//  Java program
public class RandomString {

    static String getAlphaNumericString(int n)
    {
        String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                                    + "0123456789"
                                    + "abcdefghijklmnopqrstuvxyz";

        StringBuilder sb = new StringBuilder(n);

        for (int i = 0; i < n; i++) {
            int index = (int)(AlphaNumericString.length()* Math.random());
            sb.append(AlphaNumericString.charAt(index));
        }

        return sb.toString();
    }

    public static void main(String[] args)
    {
           // printing random string of length 12
        System.out.println(RandomString.getAlphaNumericString(12));
    }
}
```

Output:

```java
tdiT7EqrWAL7
```
