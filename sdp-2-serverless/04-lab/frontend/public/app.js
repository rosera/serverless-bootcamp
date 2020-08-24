// Add some JavaScript variables
const filename = "data/language.json"; 
const btnForm  = document.querySelector('#btn');

let jsonData;
let jsonTranslate;
const URL_ENDPOINT="";

// Read the contents of the json file
fetchAsyncLocalData();

// Load the information from the data directory
async function fetchAsyncLocalData() {
  // Await the fetch execution
  const data = await(fetch(filename));
  // Await the data being available
  jsonData = await data.json();
}

// Perform the update of the HTML element
async function getDataElement(url, htmlElement){
  htmlElement.textContent = 'Processing';

  // Get the information URL
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    htmlElement.textContent = data;
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });
}

// Create a new object
async function getTranslation(items, text){
  const langTranslation = items.map((item) => {
    let url = URL_ENDPOINT + '?msg=' + text + '&lang=' + item.translate;
    console.log('URL Endpoint:' + url);

    //let url = URL_ENDPOINT + '?msg=' + text;
    htmlElement = document.querySelector(`#${item.translate}`);
    getDataElement(url, htmlElement);
  });
}

// Call for a language translation
function getLanguageTranslation(text){
  getTranslation(jsonData.Translations, text);
}

// Update the onscreen view
function setViewContent(items){
  const dynamicView = items.map((item) => {
    return `
    <div class="grid-item">
      <h2>${item.language}</h2>
      <img src=${item.flag} alt="${item.language}">
      <h2 id="${item.translate}">${item.language}</h2>
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
  


