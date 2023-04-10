# Hello HTML

## Scenario

In this lab you will build a web page. The web page will convert Hectares to Acres. 
The code below represents a simple web form. In the exmaple the user will be required to:

* Enter a numeric value
* Press the button to display an output 

At the end of this example you will have a web page that renders the example content.


## Building the web page

* Create a file called `index.html`
* Add the following code to the `index.html` file


```
<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <div class="main-content">
    <header>
      <h1>Hectares to Acres<h1>
    <header>
    <form>
      <input placeholder="Hectares" type="number" maxlength="255">
      <button>Convert</button>
    </form>
    <p id=conversion></p>
  </div>
</body>
</html>
```

* Save the file as `index.html`

The above code presents a HTML page using a form to capture user data.

* define a header 
* define a form
** input control to enter a measurement
** button control to initiate an event



## Running the code

* Open the file `index.html` in a browser

## Example Output

#### Display the web content

![web-app](https://github.com/rosera/serverless-bootcamp/blob/main/web-2-serverless/images/01-lab-web-app.png "Basic HTML app")
