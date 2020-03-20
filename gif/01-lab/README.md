# Build a custom gif maker using FFMPEG

Reference: https://engineering.giphy.com/how-to-make-gifs-with-ffmpeg/

## Pull the base image
```
docker pull jrottenberg/ffmpeg
```

## Set up the directory to process files

In the following examples, I assume from the current directory there is both an input and output subdirectory.

.

├── input

└── output

Place the mp4 to transpose in the input directory.


## Example: Convert the entire file to a gif
```
docker run -v ${PWD}/input:/temp/input -v ${PWD}/output:/temp/output jrottenberg/ffmpeg -i /temp/input/novnc-access-scripts.mp4 -filter_complex "[0:v] fps=12,scale=480:-1,split [a][b];[a] palettegen [p];[b][p] paletteuse" /temp/output/novnc-access-script.gif
```

## Example: Start at timestamp 61.0 sec and take -2.5 seconds of video as the gif
```
docker run -v ${PWD}/input:/temp/input -v ${PWD}/output:/temp/output jrottenberg/ffmpeg -ss 61.0 -t 2.5 -i /temp/input/novnc-access-scripts.mp4 -filter_complex "[0:v] fps=12,scale=480:-1,split [a][b];[a] palettegen [p];[b][p] paletteuse" /temp/output/novnc-access-script.gif
```

