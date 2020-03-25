# Build a custom gif maker using FFMPEG

Reference: https://engineering.giphy.com/how-to-make-gifs-with-ffmpeg/

## Pull the base image
```
docker pull jrottenberg/ffmpeg
```

## Set up the directory to process files

In the following examples, I assume in the current directory there is both an input and output subdirectory.

.

├── input

└── output

In the docker example commands, the input and output directories use a volume mapped to the local host. The local user is also mapped to the docker container, so the file retains the correct user permissions for the active user.

If you want to cut the MP4 to a particular timestamp 

e.g. use the following command on a file named mo.mp4:

* -ss: seek into the MP4 (133 seconds)
* -t:  stop after a length (10 seconds) 

```
docker run --rm -v ${PWD}/input:/temp/input -v ${PWD}/output:/temp/output --user $(id -u):$(id -g) jrottenberg/ffmpeg -ss 133.00 -t 10.0 -i /temp/input/mo.mp4  /temp/output/mo.mp4
```

Once you have the mp4 available to transpose in the input directory.

## Example: Convert the entire file to a gif
```
docker run -v ${PWD}/input:/temp/input -v ${PWD}/output:/temp/output --user $(id -u):$(id -g) jrottenberg/ffmpeg -i /temp/input/novnc-access-scripts.mp4 -filter_complex "[0:v] fps=12,scale=480:-1,split [a][b];[a] palettegen [p];[b][p] paletteuse" /temp/output/novnc-access-script.gif
```

## Example: Start at timestamp 61.0 sec and take 2.5 seconds of video as the gif
```
docker run -v ${PWD}/input:/temp/input -v ${PWD}/output:/temp/output --user $(id -u):$(id -g) jrottenberg/ffmpeg -ss 61.0 -t 2.5 -i /temp/input/novnc-access-scripts.mp4 -filter_complex "[0:v] fps=12,scale=480:-1,split [a][b];[a] palettegen [p];[b][p] paletteuse" /temp/output/novnc-access-script.gif
```

