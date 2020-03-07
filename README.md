# serverless-bootcamp
Quick examples to introduce serverless on GCP

# Scenario 

PDF manipulation using PDFTK

* Lesson 1: Add a command line tool from a Docker image
* Lesson 2: Express.js
* Lesson 3: Moving to the Cloud
* Lesson 4: Finalise the service


# Initial Build
docker build -t pdftk:0.1 .

# Run 

In the current directory create two sub directories

* input
* output

Grab an example multiple page PDF file and place it in the input directory

Edit the docker-run.sh file to reference the filename in the input directory. 

```
docker run --rm -d -v `pwd`/input:/input -v `pwd`/output:/output rosera/pdftk:0.1 /input/test.pdf cat 5 output /output/result.pdf
```

- volume input: uses the current directory and expects a subdirectory called input
- volume output: uses the current directory and expects a subdirector called output

In the example, a test.pdf is available and used as the input. Replace the name test.pdf with the name of the actual filename to work on. The application will cut a page from the pdf presented and write the content to a filename called output.pdf in the output directory.

Use the docker-run.sh to extract a page from the PDF file


