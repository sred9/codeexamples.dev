---
title: How to print hello world in Scala
date: "2019-12-13"
tags: ['scala','hello world','write']
template: post
---

This example will help you to print a `Hello world` program in the Scala language.

```scala
object HelloWorld {
  def main(args: Array[String]): Unit = {
    println("Hello, world!")
  }
}
```

1. Create a new file called `HelloWorld.scala` and add the above code.

2. Now we need to compile the code by running this command.

```bash
scalac HelloWorld.scala
```

This above command will generate a java bytecode.

3. Run this command to execute the generated bytecode.

```bash
scala HelloWorld
```
