# Extending a Cloud Function




## What 

Create a Cloud Function to display Certification Information

Return some certification information

* Duration
* Exam Guide
* Provider

## How

The Cloud Function should meet the following requirements:

* Provide a Certification through the Request Object
* Return JSON structure with the available Cert Details

### Node Version

* Request Object - contains the Exam
* Pass query arguments to the Cloud Function
* Process the arguments
* Return certification json


#### Request Object - contains the Exam

Amend the Cloud Function request object to access the exam information

* Change message to query


#### Pass query arguments to the Cloud Function
Pass the query in the request parameters

* Duration - standard time
* Exam Guide - standard link
* Provider - standard information source

#### Process the arguments

Process the request to provide the requested information

* Return dummy information

#### Return certification json
Return the information back via json


#### Deploy the Cloud Functions
 
Duration
```
gcloud functions deploy cka-duration --runtime nodejs10 --trigger-http --allow-unauthenticated
```


Cert
```
gcloud functions deploy cka-cert --runtime nodejs10 --trigger-http --allow-unauthenticated
```

Provider
```
gcloud functions deploy cka-provider --runtime nodejs10 --trigger-http --allow-unauthenticated
```
 
Test the deployed Cloud Function

* Invoke the function to test it works
