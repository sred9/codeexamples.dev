---
title: Calling an external command from Python
date: "2019-12-08"
tags: ['python','shell','terminal','subprocess']
template: post
---

This example will show you how to call an external command from Unix shell or Windows command prompt
in a python script.

We need to use the `subprocess` module in python.

```py
import subprocess
subprocess.run(["ls", "-l"])
```

For old versions, we need to use the `call` method.

```py
import subprocess
subprocess.call(["ls", "-l"])
```

>The subprocess module allows us to spawn new processes and connect to their input/output/error pipes, and obtain their return codes.
