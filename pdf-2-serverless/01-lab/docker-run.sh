docker run --rm -d -v `pwd`/input:/input -v `pwd`/output:/output rosera/pdftk:0.1 /input/test.pdf cat 5 output /output/result.pdf
