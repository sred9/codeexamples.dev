---
title: How to evaluate string math expression In Java
date: "2020-02-02"
tags: ['java','string','expression','math']
template: post
---

This below example will show you how to evaluate a string math expression in Java.

```java
import javax.script.ScriptEngineManager;
import javax.script.ScriptEngine;
import javax.script.ScriptException;

public class Main {
  public static void main(String[] args) throws ScriptException {
    ScriptEngineManager mgr = new ScriptEngineManager();
    ScriptEngine engine = mgr.getEngineByName("JavaScript");
    String sum = "1+2+3+4";
    System.out.println(engine.eval(sum));
  }
}
```

Output:

```java
10
```
