---
title: How to change output color of echo in Linux
date: "2019-12-09"
tags: ['command-line','terminal','bash','linux']
template: post
---

The following example is printing `green text` and `blue text` in the terminal.

```bash
echo "$(tput setaf 1)i am green $(tput setaf 4) i am blue"
```

![bash echo change color](color-changes.png)

`setaf` is used to set foreground color.

These are the available color codes.

```bash
Num  Colour    #define         R G B

0    black     COLOR_BLACK     0,0,0
1    red       COLOR_RED       1,0,0
2    green     COLOR_GREEN     0,1,0
3    yellow    COLOR_YELLOW    1,1,0
4    blue      COLOR_BLUE      0,0,1
5    magenta   COLOR_MAGENTA   1,0,1
6    cyan      COLOR_CYAN      0,1,1
7    white     COLOR_WHITE     1,1,1
```

## Changing background color

Similary, you can also change background color of the echo text by using `setab`.

The following example is printing `red background` with `yellow` text.

```bash
echo  "$(tput setaf 3) $(tput setab 1)How am i looking ?"
```
