# YouTube Playlist

This is a demonstration of how to bundle youtube-dl as a serverless component.

## Demo

### Build the container

```
docker build -t myplaylist .
```

### Run the container
```
docker run --rm -d -p 8080:8080 myplaylist
```

### Pass a YouTube playlist via a POST message e.g

```
curl -X POST -H "Content-Type: application/json" -d '{"playlist": "https://www.youtube.com/watch?v=ANBEHKjSV3Y&list=PLBgogxgQVM9vv068pn7a_uusTdsBt4Oej"}' 0.0.0.0:8080
```

The application should return an `JSON` message when successful e.g.

```
{"0":"ANBEHKjSV3Y","1":"RpvclrK_l8M","2":"hkiqncj4JLE"}
```

### Confirm the videos by looking at the Docker logs

```
docker logs [CONTAINER_ID]
```
