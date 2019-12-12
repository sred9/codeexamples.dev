---
title: How to sort an array of numbers in Java
date: "2019-12-12"
tags: ['java','sorting','arrays','numbers']
template: post
---

In this example, you will learn how to sort an array of numbers both ascending and descending order in java by using the `sort()` method.

## Sort array of numbers in ascending order

```java{10}
import java.util.Arrays;
// sort program
public class JavaSortExample
{
    public static void main(String[] args)
    {
        Integer[] numbers = new Integer[] { 10, 11, 9, 5, 47, 18, 2, 1, 3};

        //Sort the array in ascending order
        Arrays.sort(numbers);

        //Printing sorted array
        System.out.println(Arrays.toString(numbers));
    }
}
```

Output:

```java
[1, 2, 3, 5, 9, 10, 11, 18, 47]
```

## Sort array of numbers in descending order

```java{11}
import java.util.Arrays;
import java.util.Collections;

public class JavaSortExample
{
    public static void main(String[] args)
    {
        Integer[] numbers = new Integer[] { 10, 11, 9, 5, 47, 18, 2, 1, 3};

        //Sorting the array in descending order
        Arrays.sort(numbers,Collections.reverseOrder());

        //Printing sorted array
        System.out.println(Arrays.toString(numbers));
    }
}
```

Ouput:

```java
[47, 18, 11, 10, 9, 5, 3, 2, 1]
```
