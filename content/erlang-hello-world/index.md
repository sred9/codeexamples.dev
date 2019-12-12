---
title: How to write hello world in Erlang
date: "2019-12-13"
tags: ['erlang','hello world']
template: post
---

This example will show you how to write a hello world program in Erlang.

1. Create a new file called `hello.erl`.
2. Now add the following code and save it.

```erlang
-module(hello).
-export([hello_world/0]).

hello_world() -> io:fwrite("hello, world\n").
```

- Compile the program by running the below command in your terminal (erlang shell).

```erlang
1> c(hello_world).
2> hello_world:hello().
hello world
ok
```
