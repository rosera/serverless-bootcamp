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

Amend the Cloud Function request object to access the exam information

* Request Object - contains the Exam
* Pass query arguments to the Cloud Function
* Process the arguments - use dummy information
* Return the information back via json


Duration - standard time

```
// Create a Cloud Function
exports.duration=(req, res) => {
  let message = req.query.message || req.body.message || 'Called duration';

  console.log (`Cloud Function Duration`);
  res.status(200).send({status:200, msg:message});
};
```

Exam Guide - standard link

```
// Create a Cloud Function
exports.cert=(req, res) => {
  let message = req.query.message || req.body.message || 'Called certification';

  console.log (`Cloud Function Exam Guide`);
  res.status(200).send({status:200, msg:message});
};
```

Provider - standard information source

```
// Create a Cloud Function
exports.provider=(req, res) => {
  let message = req.query.message || req.body.message || 'Called provider!';

  console.log (`Cloud Function Provider`);
  res.status(200).send({status:200, msg:message});
};
```


#### Deploy the Cloud Functions
 
Duration
```
gcloud functions deploy duration --runtime nodejs10 --trigger-http --allow-unauthenticated
```


Cert
```
gcloud functions deploy cert --runtime nodejs10 --trigger-http --allow-unauthenticated
```

Provider
```
gcloud functions deploy provider --runtime nodejs10 --trigger-http --allow-unauthenticated
```
 
Test the deployed Cloud Function

* Invoke the function to test it works
