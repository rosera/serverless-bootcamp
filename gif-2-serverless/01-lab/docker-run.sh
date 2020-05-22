# docker pull jrottenberg/ffmpeg
docker run -v /home/richardrose/docker/mp4-gif/input:/temp/input -v /home/richardrose/docker/mp4-gif/output:/temp/output jrottenberg/ffmpeg -i /temp/input/novnc-access-scripts.mp4 -filter_complex "[0:v] fps=12,scale=480:-1,split [a][b];[a] palettegen [p];[b][p] paletteuse" /temp/output/novnc-access-script.gif
# This will use a time stamp -start at 61.0 sec and take -2.5 seconds for the gif
#docker run -v /home/richardrose/docker/mp4-gif/input:/temp/input -v /home/richardrose/docker/mp4-gif/output:/temp/output jrottenberg/ffmpeg -ss 61.0 -t 2.5 -i /temp/input/novnc-access-scripts.mp4 -filter_complex "[0:v] fps=12,scale=480:-1,split [a][b];[a] palettegen [p];[b][p] paletteuse" /temp/output/novnc-access-script.gif
