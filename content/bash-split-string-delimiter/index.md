---
title: How to split a string in bash by delimiter
date: "2019-12-09"
tags: ['bash','shell','string']
template: post
---

We can do this by setting an internal file separator (IFS) variable to delimiter `;` then parse it as an array and use for loop to get the each string.

In this below example, we are splitting a `dummy` variable string by semicolon `;`.

```bash
dummy="king;ring;ping"

# turns string to array
IFS= ";" read -ra ADDR <<< "$dummy"

# for loop
for i in "${ADDR[@]}"; do
    echo $i
done
```

Output:

```bash
king
ring
ping
```

## Split string by comma

```bash
dummy="king,ring,ping"

# turns string to array
IFS= "," read -ra ADDR <<< "$dummy"

# for loop
for i in "${ADDR[@]}"; do
    echo $i
done
```
