### Hexlet tests and linter status:

[![Actions Status](https://github.com/TemaGolovin/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/TemaGolovin/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/3495063199468d7f8813/maintainability)](https://codeclimate.com/github/TemaGolovin/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/3495063199468d7f8813/test_coverage)](https://codeclimate.com/github/TemaGolovin/frontend-project-46/test_coverage)

[![Node CI](https://github.com/TemaGolovin/frontend-project-46/actions/workflows/nodejs.yml/badge.svg)](https://github.com/TemaGolovin/frontend-project-46/actions/workflows/nodejs.yml)

## **Description:**

The Difference Calculator is a CLI program that shows the differences between two files. Supported file formats: JSON, YML, YAML.

## **Installation:**

1. Make sure you have at least version 12 of Node.js installed: `node -v.`
2. Clone this repository: `git clone https://github.com/TemaGolovin/frontend-project-46`
3. Run the command: `make install.`

## **Running tests:**

```
$ make test
```

## **How to use:**

---

You can use the project as a script in the terminal or as a library in your project. You can output changes in three formats: stylish (default), plain and json.

```
gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
-V, --version output the version number
-f, --format <type> <output format (default: "stylish")
-h, --help display help for command
```

1. Flat File Comparison (JSON).
   [![asciinema](https://asciinema.org/a/XvzjgZvesNKQxpmB1qgBe3Uhx.svg)](https://asciinema.org/a/XvzjgZvesNKQxpmB1qgBe3Uhx)

2. Flat File Comparison (YAML).
   [![asciinema](https://asciinema.org/a/L7BTceFjIzOoJ85iJcgThcYe5.svg)](https://asciinema.org/a/L7BTceFjIzOoJ85iJcgThcYe5)

3. Recursive comparison.
   [![asciinema](https://asciinema.org/a/80ctbnVJ7RvpOpEWGejg2hjeD.svg)](https://asciinema.org/a/80ctbnVJ7RvpOpEWGejg2hjeD)

4. Plain format.
   [![asciinema](https://asciinema.org/a/6aDunWEiecPkOkV96xxyKWL4W.svg)](https://asciinema.org/a/6aDunWEiecPkOkV96xxyKWL4W)

5. JSON format.
   [![asciinema](https://asciinema.org/a/Lr2B8dDtFD0k8tZWdmqyljE3c.svg)](https://asciinema.org/a/Lr2B8dDtFD0k8tZWdmqyljE3c)
