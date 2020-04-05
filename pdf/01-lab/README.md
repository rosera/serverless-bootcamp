# 01 LAB
Add a command line tool from a Docker image

In this lab you will:

* Build a Dockerfile for [pdftk](https://www.pdflabs.com/tools/pdftk-the-pdf-toolkit/)
* Test it locally
* Script the command to take arguments
* Fix filenames with spaces and commas

## Build the Docker image

Bulld a local image using Docker build

```
docker build -t rosera/pdftk:0.1 .
```

## Test it locally

Once successfully built, we will need a local doc to test against. Lets use the Dockerfile.

Lets read a PDF and cut the 1st page and create a new pdf doc with it

```
docker run --rm -d -v `pwd`/input:/input -v `pwd`/output:/output --user $(id -u):$(id -g) rosera/pdftk:0.1 input/[FILENAME] cat 1 output/[FILENAME]
```

## Create an environment variable

In the above example, we can replace the filename and number of pages with environment variables

```
FILE_TO_CONVERT="[FILENAME]"
PAGES_TO_CUT="[#PAGES]"
```

Use the environment variable to call our application
```
docker run --rm -d -v `pwd`/input:/input -v `pwd`/output:/output --user $(id -u):$(id -g) rosera/pdftk:0.1 input/$FILE_TO_CONVERT cat $PAGES_TO_CUT output/$FILE_TO_CONVERT
```

## Make a script to perform a bulk conversion of files to PDF

What if we have a filename that contains spaces or commas?

## Worklist
- [x] Build the Docker image
- [x] Test it locally
- [x] Create an environment variable
- [ ] Fix the application to work with spaces
- [ ] Fix the application to work with commas
- [ ] Script the application to perform bulk file conversions
