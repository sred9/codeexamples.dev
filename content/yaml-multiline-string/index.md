---
title: How to write a multiline string in YAML
date: "2019-12-20"
tags: ['yaml','multiline','string']
template: post
---

To write a multiline string in YAML we can use the folded style `>` where each line break is replaced by a space.

Here is an example:

```yaml
Key: >
  you can write
  multiline strings
  like this in yaml.
```

Similarly, you can write like this.

```yaml
Key: >-
  you can write
  multiline strings
  like this in yaml.
```
