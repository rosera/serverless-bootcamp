// TODO: Cleanup code

// Add some JavaScript variables
//const filename = "data/language.json"; 
//const filename = "data/language2.json"; 
const filename = "data/language3.json"; 
const btnForm  = document.querySelector('#btn');

let jsonData;
let jsonTranslate;

// Add the TEXT Cloud Function
const TEXT_ENDPOINT="https://us-central1-roselabs-212512.cloudfunctions.net/text-translate";
// Add the SPEECH Cloud Function
const AUDIO_ENDPOINT="https://us-central1-roselabs-212512.cloudfunctions.net/audio-translate";

// Add CLOUD STORAGE BUCKET - needs to be public
const audioFilename = "https://storage.googleapis.com/roselabs-cloud-functions/";

// Read the contents of the json file
fetchAsyncLocalData();

// Load the information from the data directory
async function fetchAsyncLocalData() {
  // Await the fetch execution
  const data = await(fetch(filename));
  // Await the data being available
  jsonData = await data.json();
}

// Perform the update of the HTML element - translate text
async function getAudioEndpoint(text, lang, speech){
  let url = AUDIO_ENDPOINT + '?msg=' + text + '&fname=' + lang + '&lang=' + speech;
//  let url = AUDIO_ENDPOINT + '?msg=' + "Hello" + '&fname=' + lang + '&lang=' + 'en-UK';
  console.log('Audio URL Endpoint:' + url);

  // Get the information URL
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Fetch error:', error.toString());
    return ;
  });

}


// Perform the update of the HTML element - translate text
async function getTextEndpoint(url, htmlElement){
  let newText = "";
  htmlElement.textContent = 'Processing';


  // Get the information URL
  nextText = await(  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    htmlElement.textContent = data;
    return data;
  })
  .catch((error) => {
    console.error('Fetch error:', error.toString());
    return "";
  })
  );

  console.log("Ret data:" + newText);
  return newText;

}


async function processEndpoint(msg, text, lang, speech){
  // Build the URL for Text Translation
  let url = TEXT_ENDPOINT + '?msg=' + msg + '&lang=' + text;
  console.log('processEndpoint Text URL Endpoint:' + url);

  //http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
  let filename = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  // Get the html element item.text
  let htmlElement = document.querySelector(`#${text}`);
  htmlElement.textContent = 'Processing';
  
  // --------------------- FETCH TEXT -----------------------
  // Get the information URL
  fetch(url)
  .then((res) => res.json())
  .then(async(data) => {
    console.log(data);
    htmlElement.textContent = await (data);
    let translatedMsg = await(data); 
    // Perform second fetch
    let url2 = AUDIO_ENDPOINT + '?msg=' + translatedMsg + '&fname=' + filename + '&lang=' + speech;
    console.log('processEndpoint Audio URL Endpoint:' + url2);

    // Get the information URL
    fetch(url2)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let htmlElement2 = document.querySelector(`#${speech}`);
      let myElement = '<source src="https://storage.googleapis.com/roselabs-cloud-functions/' + filename + '.mp3 " type="audio/mpeg">'
      htmlElement2.innerHTML = myElement;
    })
    .catch((error) => {
      console.error('Fetch error:', error.toString());
      return ;
    });
  })
  .catch((error) => {
    console.error('Fetch error:', error.toString());
  });

  // --------------------- FETCH TEXT -----------------------
}

// Create a new object
async function getTextTranslation(items, text){
  const langTranslation = items.map((item) => {
    let url = TEXT_ENDPOINT + '?msg=' + text + '&lang=' + item.text;
    console.log('Text URL Endpoint:' + url);

    htmlElement = document.querySelector(`#${item.text}`);
    textTranslation = processEndpoint(text, item.text, item.language, item.speech);
  });
}

// Call for a language translation
function getLanguageTranslation(text){
  // Get the text translation of the specified text
  getTextTranslation(jsonData.Translations, text);

  // Get the audio version of the specified text
//  getAudioTranslation(jsonData.Translations, text);

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
  // Get the message entered on the form
  const inputMsg = document.querySelector('#message').value;

  // Display the grid
  getLanguageView();

  // Get Translation
  getLanguageTranslation(inputMsg);
});
