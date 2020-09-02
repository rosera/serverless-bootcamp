# Serverless Days Demo

## Small Talk


A combination of a HTML web app and Cloud Functions


### Web Application



### Cloud Functions

```
gcloud functions deploy speech-translate \
  --entry-point apiTranslate \
  --runtime nodejs10 \
  --trigger-http \
  --region us-central1 \
  --allow-unauthenticated
```

