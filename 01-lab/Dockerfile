FROM debian:stretch-slim
LABEL MAINTAINER Rich Rose

ENV DEBIAN_FRONTEND=noninteractive \
    LC_ALL=C.UTF-8 \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US.UTF-8 

RUN apt-get update \
    && apt-get install -y pdftk \
    && apt-get clean autoclean \
    && apt-get autoremove --yes \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \
    && mkdir /input \
    && mkdir /output 

# Create USER
RUN useradd -ms /bin/bash pdfuser

#USER
USER pdfuser

# DEFAULT DIR
WORKDIR = /home/pdfuser

# MAP VOLUME
VOLUME ["/home/pdfuser/input","/home/pdfuser/output"]

# ENTRYPOINT
ENTRYPOINT ["/usr/bin/pdftk"]
