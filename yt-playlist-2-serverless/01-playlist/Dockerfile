FROM node:12

ENV LANG=C.UTF-8 
ENV LC_ALL=C.UTF-8

RUN apt-get update -y \
    && apt-get install -y aria2 \
    ca-certificates \
    ffmpeg \
    openssl \
    python3 \
    python3-pip \
    && pip3 install youtube-dl \
    && apt-get clean

WORKDIR /usr/src/app

COPY package.json package*.json ./
RUN npm install --only=production
COPY . .
CMD [ "npm", "start" ]
