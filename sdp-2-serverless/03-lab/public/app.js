// Add some JavaScript
const btnForm  = document.querySelector('#btn');
const msgGB    = document.querySelector('#msgGB');
const msgFR    = document.querySelector('#msgFR');
const msgCN    = document.querySelector('#msgCN');

let jsonData;
let filename = "data/language.json";

fetchAsyncLocalData();

// Load the information from the data directory
async function fetchAsyncLocalData(){
  // Await the fetch
  const data = await(fetch(filename));
  jsonData = await data.json();
}

// Link to form button event
btnForm.addEventListener('click', (event) => {
  // Get the message entered on the form
  const inputMsg = document.querySelector('#message').value;

  // Add the text to the grid items
  msgGB.textContent = inputMsg;
  msgFR.textContent = inputMsg + ' (French)';
  msgCN.textContent = inputMsg + ' (Chinese)';
});

