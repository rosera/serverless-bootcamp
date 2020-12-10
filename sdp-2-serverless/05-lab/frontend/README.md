# Frontend

## Update the application variables

- [ ] TEXT_ENDPOINT is the URL for the deployed Text Function e.g. `URL/text-to-translation`
- [ ] SPEECH_ENDPOINT is the URL for the deployed Speech Function e.g `URL/text-to-speech`
- [ ] STORAGE_BUCKET is the storage.googleapis.com URL e.g. `https://googleapis.com/MY_BUCKET`

Optional:

Amend the language JSON file to include your favourite languages


## Build an image

Build the image and push to Container Regisitry

```
gcloud builds submit --tag gcr.io/$GOOGLE_CLOUD_PROJECT/frontend
```


## Deploy Cloud Run


* Set the Cloud Run region
```
gcloud config set run/region us-central1
```

* Set the Cloud Run platform to managed
```
gcloud config set run/platform managed
```


Deploy an image to Cloud Run

```
gcloud run deploy small-talk --image gcr.io/$GOOGLE_CLOUD_PROJECT/frontend --allow-unauthenticated
```
