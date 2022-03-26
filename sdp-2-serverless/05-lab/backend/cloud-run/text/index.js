const {Translate} = require('@google-cloud/translate').v2;
const express = require('express');
const cors    = require('cors');

// Add a valid PROJECT_ID
const PROJECT_ID = process.env.PROJECT_ID || '';
const translate = new Translate({PROJECT_ID});

// Initialise the port
const port = process.env.PORT || 8080;
const app  = express();

app.use(cors());
app.use(express.json());

// Listen on a network port
app.listen(port, () => console.log(`Listening on:${port}`))

// Render the web page with parameters
app.get('/', async (req, res) => {
  
  let msg  = req.query.msg || 'Hello';
  let lang = req.query.lang || 'fr';

  // Debug
  console.log(`msg: ${msg} lang: ${lang}`);

  // Request a translation
  translation = await translateService(msg, lang, res);

  if (translation === null){
    res.status(400).json({"status":"error"});
  } else {
    // Enable Cors
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    res.status(200).json(translation);
  }
})

async function translateService(text, target, res) {
  try {
    // Call the translation service
    const [translation] = await translate.translate(text, target);

    return (translation);
  } catch (err) {
    console.log(`Error Handling: ${err}`);
    return null;
  }
}
