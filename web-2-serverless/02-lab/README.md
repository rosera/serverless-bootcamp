# Hello JavaScript 

## Scenario

Add some JavaScript (js) code to the HTML page to perform a calculation:

* Hectares to Acres

 
## Developing with JavaScript
 
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
To initialise the input field to blank use the `text.Content` property e.g.

```
outputControl.textContent = '';
```

### Add a JavaScript Event Listener

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
 
1. Open the file `index.html` in a browser
2. Enter a value in the input box
3. Select the convert button
4. An answer is displayed onscreen


## Example Output

#### Display the web content

![web-app](https://github.com/rosera/serverless-bootcamp/blob/main/web-2-serverless/images/01-lab-web-app.png "Basic HTML app")

#### Adding the call to JavaScript renders a conversion

![web-app with js](https://github.com/rosera/serverless-bootcamp/blob/main/web-2-serverless/images/02-lab-web-app-js.png "Basic HTML with js")
