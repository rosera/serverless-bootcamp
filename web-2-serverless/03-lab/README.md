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
body {
  color: #333333;
  font-family: arial;
  max-width: 650px;
  margin: 0 auto;
  padding: 0 16px;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
}

footer {
  color: #888888;
  border-top: 1px solid #eeeeee;
#  margin-top: 16px;
  padding: 16px 0;
}

h1 {
  font-size: 32px;
  margin-bottom: 16px;
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
|![web-app](https://github.com/rosera/serverless-bootcamp/blob/master/web-2-serverless/images/01-lab-web-app.png "Basic HTML app") | ![web-app](https://github.com/rosera/serverless-bootcamp/blob/master/web-2-serverless/images/03-lab-web-app-css-1.png "Basic HTML with CSS") |


#### Adding the call to JavaScript renders a conversion

| Before - No CSS | After - With CSS |
|-----------------|------------------|
|![web-app with js](https://github.com/rosera/serverless-bootcamp/blob/master/web-2-serverless/images/02-lab-web-app-js.png "Basic HTML with js") | ![web-app with js](https://github.com/rosera/serverless-bootcamp/blob/master/web-2-serverless/images/03-lab-web-app-css-2.png "Basic HTML with js")


