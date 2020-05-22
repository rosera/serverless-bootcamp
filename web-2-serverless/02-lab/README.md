# Hello Javascript

## Scenario

Add some Javascript code to the HTML page to perform a calculation:

* Hectares to Acres

 
## Developing the Javascript
 
Our app will take the content entered on the form and perform a calculation

 
* Create a file called `app.js`
* Add the following code to the `app.js` file

### Accessing HTML controls 

Onscreen values can be accessed using the `document.querySelector` function.
In our application, we will reference the following onscreen controls:

* Form
* Input
* Output


```
const formControl   = document.querySelector('form');
const inputControl  = document.querySelector('input');
const outputControl = document.querySelector('#conversion');
```

### Initialise control(s)

Once we have access to the onscreen controls, we can update their value.
To initialise a control to blank use the `text.Content` property e.g.

```
outputControl.textContent = '';
```

### Add an Event Listener

The event listener is called when our application generates an event.
In this instance, pressing the button is the event we are interested in.

* event.preventDefault();
* parseInt
* calculate Hectares to Acres
* Show the calculation result

```
formControl.addEventListener('submit', (event) => {
  event.preventDefault();

  if (parseInt(inputControl.value)) {
    const calcResult = (inputControl.value * 2.4711).toFixed(2);
    outputControl.textContent = inputControl.value.toString() + " Hectares is " + calcResult.toString() + " Acres";
  }
})
```

* Save the file as `app.js`

 
## Running the code
 
* Open the file `index.html` in a browser
* Enter a value in the input box
* Select the convert button
* An answer is displayed onscreen


## Example Output
 

