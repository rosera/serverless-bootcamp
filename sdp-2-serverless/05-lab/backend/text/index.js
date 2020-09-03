const {Translate} = require('@google-cloud/translate').v2;

const PROJECT_ID = process.env.PROJECT_ID || '';
const translate = new Translate({PROJECT_ID});


async function translationService(text, target, res) {
  try {
    // Enable Cors
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    // Call the translation service
    const [translation] = await translate.translate(text, target);
    return res.status(200).json(translation);
  } catch (err) {
    console.log(`Error Handling: ${err}`);
  }
}

exports.apiTranslate = (req, res) => {
  let msg = req.query.msg || 'Hello';
  let lang = req.query.lang || 'fr';

  // Call the translation service
  translation = translationService(msg, lang, res);
};
