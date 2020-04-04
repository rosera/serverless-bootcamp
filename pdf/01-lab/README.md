# 01 LAB
Add a command line tool from a Docker image

In this lab you will:

* Build a Dockerfile for pdftk
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

```
docker run --rm -d -v `pwd`/convert:/convert rosera/pdftk:0.1 /convert/Dockerfile
```

## Create an environment variable
```
FILE_TO_CONVERT="/convert/Dockerfile"
```

Use the environment variable to call our application
```
docker run --rm -d -v `pwd`/convert:/convert rosera/pdftk:0.1 $FILE_TO_CONVERT
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
