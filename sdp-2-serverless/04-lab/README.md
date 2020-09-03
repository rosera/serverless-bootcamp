# Small Talk

## What am I building

![small-talk](https://github.com/rosera/serverless-bootcamp/blob/master/sdp-2-serverless/images/03-lab-small-talk.png "Small Talk app")

This example uses updates a web based application to use googleapis. In the demo, the web application will use the [Google Cloud Translate]((https://cloud.google.com/translate/docs/languages)) api to translate a message to a a defined language.

![architecture](https://github.com/rosera/serverless-bootcamp/blob/master/sdp-2-serverless/images/04-arch-small-talk.png "Small Talk architecture")

## How do I build it

From the above diagram there are two elements to the application

* Backend - [Google Cloud Function](https://cloud.google.com/functions)
* Frontend - HTML, CSS, Javascript

### Backend - Google Cloud Function

To implement the backend Cloud Function, use the following:

- [X] Active [Google Cloud project](https://cloud.google.com/free)
- [X] Cloud Shell
- [X] Cloud Functions Deploy
- [x] Googleapis via unauthenticated call


### Frontend - HTML Web

To implement the frontend, use the following:

#### Running the code using Node

- [X] JSON configuration file - defines the languages presented on screen
- [X] Node environment supported added
- [X] Frontend uses Port 8080

* From the command line, use `npm start` to run the app
* View the running application at `localhost:8080`
