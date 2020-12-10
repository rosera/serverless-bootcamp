// TODO: Cleanup code
const TEXT_ENDPOINT  = "https://us-central1-qwiklabs-gcp-04-2864df0875a3.cloudfunctions.net/text-to-translation";
const SPEECH_ENDPOINT  = "https://us-central1-qwiklabs-gcp-04-2864df0875a3.cloudfunctions.net/text-to-speech";
const STORAGE_BUCKET = "https://storage.googleapis.com/qwiklabs-gcp-04-2864df0875a3-audio"
const FILENAME       = "data/language3.json"; 
const btnForm        = document.querySelector('#btn');

  // --------------------- Messy FETCH  -----------------------
// Simplify the data fetch
const getDataAsync = async (url) => {
  const response = await fetch(url);
  let data = await response.json();
  return data;
}

let jsonData;

// Read the contents of the json file
fetchAsyncLocalData(FILENAME);

// Load the information from the data directory
async function fetchAsyncLocalData(url) {
  // Await the fetch execution
  const response = await(fetch(url));
  jsonData = await response.json();
}

// --------------------- Messy FETCH  -----------------------




// Generate a pseudo random filename
function getRandomFilename(){
  return (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
}


async function processSpeechEndpoint(textToSpeech, speech){
  // --------------------- FETCH AUDIO -----------------------
  let filename = getRandomFilename();
  let url = SPEECH_ENDPOINT + '?msg=' + textToSpeech + '&fname=' + filename + '&lang=' + speech;
  console.log(`SPEECH_URL: ${URL}`);
  // Initiate translation of text to speech - output goes to Cloud Storage
  await getDataAsync(url);
  let htmlElement2 = document.querySelector(`#${speech}`);
  let myElement = '<source src="' + STORAGE_BUCKET + '/' + filename + '.mp3" type="audio/mpeg">'
  console.log(`FILE: ${myElement}`);
  htmlElement2.innerHTML = myElement;
  // --------------------- FETCH AUDIO -----------------------
}

async function processTextEndpoint(msg, text, lang){

  // --------------------- FETCH TEXT -----------------------
  let url = TEXT_ENDPOINT + '?msg=' + msg + '&lang=' + text;
  let htmlElement = document.querySelector(`#${text}`);
  htmlElement.textContent = 'Processing';
  let translatedMsg = await getDataAsync(url);
  htmlElement.textContent = translatedMsg;
  // --------------------- FETCH TEXT -----------------------
  return translatedMsg;
}

// Perfor the data processing
async function processEndpoint(msg, text, lang, speech){
  let textToSpeech = await processTextEndpoint(msg, text, lang);
  processSpeechEndpoint(textToSpeech, speech);
}


// Create a new object
async function getTextTranslation(items, text){
  const langTranslation = items.map((item) => {
    textTranslation = processEndpoint(text, item.text, item.language, item.speech);
  });
}

// Call for a language translation
function getLanguageTranslation(text){
  // Get the text translation of the specified text
  getTextTranslation(jsonData.Translations, text);
}

// Update the onscreen view
function setViewContent(items){
  const dynamicView = items.map((item) => {
    return `
    <div class="grid-item">
      <h2>${item.language}</h2>
      <img src=${item.flag} alt="${item.language}">
      <h3 id="${item.text}">Processing</h3>
      <h3>Click on the play button to play a sound:</h3>
      <audio controls id="${item.speech}">
        Your browser does not support the audio element.
     </audio>
     </div>`;
  });

  // Return a string - without a comma  
  return dynamicView.join("");  
}

// Build onscreen information
function getLanguageView() {
  languageGrid = document.querySelector('#grid');
  languageGrid.innerHTML = setViewContent(jsonData.Translations);
}

// Link to form button event
btnForm.addEventListener('click', (event) => {
  const inputMsg = document.querySelector('#message').value;
  getLanguageView();
  getLanguageTranslation(inputMsg);
});
