# Serverless Days Demo

In this section 

- [x] Cloud the repo
- [x] Move to the working directory
- [x] Set the Google Cloud project in cloud shell
- [x] Deploy the Cloud Function
- [x] Copy the URL of the deployed Cloud Function

### Repo
Clone the repository
```
git clone https://github.com/rosera/serverless-bootcamp.git
```

Change to the correct working directory
```
cd serverless-bootcamp/sdp-2-serverless/04-lab/backend
```


### Cloud Functions

Set up the project - replace PROJECT_ID with a valid reference for your account
```
gcloud config set project [PROJECT_ID]
```

Deploy the cloud function

```
gcloud functions deploy translate-api --entry-point apiTranslate --runtime nodejs10 --trigger-http --region us-central1 --allow-unauthenticated
```

Copy the URL for the function - need to paste this into the frontend web application
