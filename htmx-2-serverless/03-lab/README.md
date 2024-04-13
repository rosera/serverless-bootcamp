# Hello CSS 
 

## Scenario
 Add CSS improve the look and feel of the application

* Hectares to Acres

 
## Developing with CSS
 
Our app add a new css file to handle the rendering of the interface

* body
* main-content
* footer
* h1
 
* Create a file called `styles.css`
* Add the following code to the `styles.css` file

```
* {
  box-sizing: border-box;
}

body {
  background-color: #ffffff;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 20px;
}

.main-content {
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow:  0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  padding: 50px 20px;
  text-align: center;
  max-width: 100%;
  width: 800px;
}


h1 {
  font-size: 32px;
  margin-bottom: 16px;
}

h3 {
  margin: 0;
  opacity: 0.5;
  letter-spacing: 2px;
}

img {
  width: 100px;
  margin-bottom: 20px;
}

.btn {
  background-color: #2fa8cc;
  color: #f4f4f4;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  padding: 14px 40px;
  font-size: 16px;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: 0;
  }
}

footer {
  color: #888888;
  border-top: 1px solid #eeeeee;
  padding: 16px 0;
}
```


### Calling CSS from HTML

The application calls the stylesheet via a link in the head section of `index.html`
```
<head>
  <link rel="stylesheet" href="styles.css">
  .
  .
  .
</head>
```
__Note:__ the is has been present in the template code, HTML is very forgiving and will ignore content that doesnt exist.


### CSS Basics

In the CSS, the page elements are added to allow a style to be added to them. For example, the `h1` element is given a size and margin.

With the addition of the CSS file, the page content will now render centrally and use the styling provided in `styles.css`

 
## Running the code
 
1. Open the file `index.html` in a browser
2. Enter a value in the input box
3. Select the convert button
4. An answer is displayed onscreen


## Example Output

#### Display the web content

| Before - No CSS | After - With CSS |
|-----------------|------------------|
|![web-app](https://github.com/rosera/serverless-bootcamp/blob/main/web-2-serverless/images/01-lab-web-app.png "Basic HTML app") | ![web-app](https://github.com/rosera/serverless-bootcamp/blob/main/web-2-serverless/images/03-lab-web-app-css-1.png "Basic HTML with CSS") |


#### Adding the call to JavaScript renders a conversion

| Before - No CSS | After - With CSS |
|-----------------|------------------|
|![web-app with js](https://github.com/rosera/serverless-bootcamp/blob/main/web-2-serverless/images/02-lab-web-app-js.png "Basic HTML with js") | ![web-app with js](https://github.com/rosera/serverless-bootcamp/blob/main/web-2-serverless/images/03-lab-web-app-css-2.png "Basic HTML with js")


