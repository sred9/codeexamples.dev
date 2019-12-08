---
title: How to parse command line arguments in Bash
date: "2019-12-09"
tags: ['bash','command-line','shell']
template: post
---

This example will help you to parse a command line arguments in bash.

We are using bash without `getopt[s]`.

```bash
cat >/tmp/fun-code-examples.sh <<'EOF'

POSITIONAL=()
while [[ $# -gt 0 ]]
do
key="$1"

case $key in
    -e|--extension)
    EXTENSION="$2"
    shift # past argument
    shift # past value
    ;;
    -s|--searchpath)
    SEARCHPATH="$2"
    shift # past argument
    shift # past value
    ;;
    -l|--lib)
    LIBPATH="$2"
    shift # past argument
    shift # past value
    ;;
    --default)
    DEFAULT=YES
    shift # past argument
    ;;
    *)    # unknown option
    POSITIONAL+=("$1") # save it in an array for later
    shift # past argument
    ;;
esac
done
set -- "${POSITIONAL[@]}" # restore positional parameters

echo "FILE EXTENSION  = ${EXTENSION}"
echo "SEARCH PATH     = ${SEARCHPATH}"
echo "LIBRARY PATH    = ${LIBPATH}"
echo "DEFAULT         = ${DEFAULT}"
echo "Number files in SEARCH PATH with EXTENSION:" $(ls -1 "${SEARCHPATH}"/*."${EXTENSION}" | wc -l)
if [[ -n $1 ]]; then
    echo "Last line of the file specified as non-opt/last argument:"
    tail -1 "$1"
fi
EOF

chmod +x /tmp/fun-code-examples.sh

/tmp/fun-code-examples.sh -e conf -s /etc -l /usr/lib /etc/hosts
```

Output:

```bash
FILE EXTENSION  = conf
SEARCH PATH     = /etc
LIBRARY PATH    = /usr/lib
DEFAULT         =
Number files in SEARCH PATH with EXTENSION: 14
Last line of the file specified as non-opt/last argument:
# 92.182.214.32    oops.com
```
