---
title: How to extract filename and extension separately in bash
date: "2019-12-09"
tags: ['bash','shell','command-line','filename']
template: post
---

This example will show you how to extract filename and extension separately in the bash.

## Extracting file name without extension

```bash
fullfile="fun/ss/log.txt"
filename=$(basename -- "$fullfile")
filename="${filename%.*}"
echo $filename

# log
```

In the above code first, we have used `basename` command to get basename which looks like this `log.txt` on the next line, we have used `%.*` to get the file name without extension.

## Extracting extension without filename

```bash
fullfile="fun/ss/log.txt"
filename=$(basename -- "$fullfile")
extension="${filename##*.}"
echo $extension
```

Output:

```bash
.txt
```

## Second way

You can also try this simple to get the filename.

```bash
fullfile="fun/ss/log.txt"
filename=$(basename $fullfile .txt)
echo $filename
```

Output:

```bash
log
```
