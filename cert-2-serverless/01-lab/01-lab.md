# Create a Cloud Function




## What 

Create a Cloud Function to display Certification Information

## How

The Cloud Function should meet the following requirements:

* Provide a Certification through the Request Object
* Return JSON structure with the available Cert Details

### Node Version

Make a new directory for the certification and change to it

```
mkdir cka-cert-cf && cd $_
```

Initialise the directory with a default `package.json`
```
npm init -y
```

Edit the package.json file generated to remove the test line and add a start
command as per the example below:
```

```

Create a new file called index.js and add the following code

```
exports.cert=(req, res) => {
  console.log (`Cloud Function cert`);  
  res.status(200).send({status:200, message:"Hello"});
}

```

Deploy the Cloud Function
```
gcloud functions deploy cert --runtime nodejs10 --trigger-http
```


Test the deployed Cloud Function
