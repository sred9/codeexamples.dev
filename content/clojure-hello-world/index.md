---
title: How to write a hello world in Clojure
date: "2019-12-13"
tags: ['clojure','hello world','write']
template: post
---

In this example, you will learn about how to write a hello world program in Clojure.

## 1. Create a new project

```bash
lein new helloworld
```

## 2. Replacing code

Now replace the `project.clj` code with the below code.

```clojure:title=project.clj
(defproject helloworld "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]]
  :main helloworld.core)
```

Next, add the below code to your `src/helloworld/core.clj`:

```clojure
(ns helloworld.core)

(defn -main
  "I can say 'Hello World'."
  []
  (println "Hello, World!"))
```

## 3. Run the program

```bash
lein run
```

It will print the `Hello, World!` in your terminal.
