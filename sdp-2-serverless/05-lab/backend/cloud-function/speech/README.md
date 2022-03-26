# Small Talk

Google Cloud Serverless example

### API

- [ ] Enable the TextToSpeech API

## Create a Storage Bucket for the Audio files

* Create a environment variable for the bucket name

```
STORAGE_BUCKET="$GOOGLE_CLOUD_PROJECT-audio"
```

* Create a bucket using the environment variable

```
gsutil mb gs://$STORAGE_BUCKET
```


### Cloud Functions


- [ ] Uses the TextToSpeech API
- [ ] Deploy the Cloud Function
- [ ] Sets default translation to French - can be overriden
- [ ] Include environment variable


```
gcloud functions deploy text-to-speech \
  --entry-point apiTextToSpeech \
  --runtime nodejs10 \
  --trigger-http \
  --region us-central1 \
  --set-env-vars STORAGE_BUCKET=$STORAGE_BUCKET \
  --allow-unauthenticated
```

