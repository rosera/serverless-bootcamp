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

A `package.json` file will be produced similar to the one below:

```
     1  {
     2    "name": "cka-cert-cf",
     3    "version": "1.0.0",
     4    "description": "",
     5    "main": "index.js",
     6    "scripts": {
     7      "test": "echo \"Error: no test specified\" && exit 1"
     8    },
     9    "keywords": [],
    10    "author": "",
    11    "license": "ISC"
    12  }
```

Edit the package.json file generated (i.e. Line 7) to:

* remove the test line
* add a start command 

```
     1  {
     2    "name": "cka-cert-cf",
     3    "version": "1.0.0",
     4    "description": "",
     5    "main": "index.js",
     6    "scripts": {
     7      "start": "node index.js"
     8    },
     9    "keywords": [],
    10    "author": "",
    11    "license": "ISC"
    12  }
```

Create a new file called index.js and add the following code

```
exports.cert=(req, res) => {
  let message = req.query.message || req.body.message || 'Hello World!'; 
  console.log (`Cloud Function cert`);  
  res.status(200).send({status:200, msg:message});
}
```

Deploy the Cloud Function
```
gcloud functions deploy cert --runtime nodejs10 --trigger-http
```


Test the deployed Cloud Function

* Invoke the function to test it works
