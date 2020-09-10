// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');

// Import other required libraries
const fs = require('fs');
const util = require('util');

// Import storage
const {Storage} = require('@google-cloud/storage');
const storage = new Storage();



// Process the audio file
async function googleSpeechAPI(req, res) {
  let message  = req.query.msg || 'Cloud Functions speech translation';
  let filename = req.query.fname || 'test';
  let lang     = req.query.lang || 'en-UK';

  console.log('Message: ' + message);
  console.log('Language: ' + lang);
  console.log('Filename: ' + filename);

  // Creates a client
  const client = new textToSpeech.TextToSpeechClient();

  // The text to synthesize
  // Project Storage Bucket 
//  const myBucket = storage.bucket('roselabs-demos');
  const myBucket = storage.bucket('roselabs-cloud-functions');
  const destination = filename + '.mp3';
  const tempName = '/tmp/' + destination;
  const file = myBucket.file(destination);

  // Add CORS to the response header
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  const request = {
    input: {text: message},
    // Select the language and SSML Voice Gender (optional)
    voice: {languageCode: lang, ssmlGender: 'NEUTRAL'},
    // Select the type of audio encoding
    audioConfig: {audioEncoding: 'MP3'},
  };

  // Performs the Text-to-Speech request
  const [response] = await client.synthesizeSpeech(request);
  
  // Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
  await writeFile(tempName, response.audioContent, 'binary');

  // Write the binary audio content to cloud Storage#
  fs.createReadStream(tempName)
    .pipe(file.createWriteStream())
    .on('error', function(err) {
       // Error - audio not written to storage
       console.log('Error - Audio file output: ' + err); 

       // Return a filename
       res.status(404);
    })
    .on('finish', function() {
       // Success - audio written to storage
       console.log('Success - Audio file output: ' + destination);

       // Return a filename
//       res.status(200).send(`filename: ${destination}`);
       res.status(200).json(destination);
  });


}

// Create a audio file based on the message sent
exports.apiSpeech=(req, res)=>{
  googleSpeechAPI(req, res);
}
