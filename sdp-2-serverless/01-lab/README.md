# Small Talk

## Scenario

Learn to build a static web page that presents a grid of different languages.

## Building the web page

1. Create a file called `index.html`
2. Add the following code to the `index.html` file


```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>speechgraphic</title>
    <!-- Include Google fonts: Frijole, Open Sans, Oswald -->
    <link href="https://fonts.googleapis.com/css?family=Frijole|Open+Sans|Oswald&display=swap" rel="stylesheet">
    <!-- Normalize browser styles -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet">
    <link href="app.css" rel="stylesheet">
    <!-- Link to app.js with defer till HTML render -->
    <script defer src="app.js"></script>
</head>
<body>
    <header>
        <h2>Serverless Demo</h2> 
        <h1>Small Talk</h1>
    </header>
    <!-- .grid to attach tiles to -->
    <main id="grid">
            <div class="grid-item" id=".grid-item:nth-child(1)">
              <h2 id="C1">French</h2>
            </div>
            <div class="grid-item" id=".grid-item:nth-child(2)">
              <h2>Spanish</h2>
            </div>
            <div class="grid-item" id=".grid-item:nth-child(3)">
              <h2>Japanese</h2>
            </div>
            <div class="grid-item" id=".grid-item:nth-child(4)">
              <h2>Chinese (Simplified)</h2>
          </div>
          <div class="grid-item" id=".grid-item:nth-child(5)">
            <h2>English</h2>
          </div>
          <div class="grid-item" id=".grid-item:nth-child(6)">
            <h2>Hindi</h2>
          </div>
          <div class="grid-item" id=".grid-item:nth-child(7)">
            <h2>Portuguese</h2>
          </div>
          <div class="grid-item" id=".grid-item:nth-child(8)">
            <h2>Bengali</h2>
          </div>
          <div class="grid-item" id=".grid-item:nth-child(9)">
            <h2>Russian</h2>
          </div>
    </main>
    <footer>
        <!-- Include information source -->
        <p class="fine-print">Learning is fun.</p>
    </footer>
</body>
</html>
```

3. Save the file as `index.html`
4. Create a file called `app.css` and add the following content
```
/* General Styles */
body {
    background: rgb(111, 208, 224);
    background: linear-gradient(0deg,rgb(111, 208, 224) 0%, rgb(171, 228, 167) 100%);
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    min-height: 100vh;
}

h1 {
    margin: 0;
    font-family: 'Frijole', cursive;
    font-size: 3em;
    font-weight: 400;
}

h2,
h3 {
    font-family: 'Oswald', sans-serif;
}

@media (min-width: 650px) {
    h1 {
        font-size: 5em;
    }
}

@media (min-width: 920px) {
    h1 {
        font-size: 8em;
    }
}

p {
    font-weight: 100;
}

/* Grid Styles */

#grid {
    background: #fff url(images/tracks.png) no-repeat;
    background-size: cover;
    display: flex;
    margin: 2em;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    flex-wrap: wrap;
}

# Class Definition
.grid-item {
    position: relative;
    box-sizing: border-box;
    width: 100%;
}

.grid-item:nth-child(1){
    background: #009687f5;
}

.grid-item:nth-child(2){
    background: #dc7657f5;
}

.grid-item:nth-child(3){
    background: #4bb3c1fa;
}

.grid-item:nth-child(4){
    background: #fac069f9;
}

.grid-item:nth-child(5){
    background: #67a866f9;
}

.grid-item:nth-child(6){
    background: #b94169fa;
}

.grid-item:nth-child(7){
    background: #7f62b3fa;
}

.grid-item:nth-child(8){
    background: #9fc376f9;
}

.grid-item:nth-child(9){
    background: #677bcbfa;
}

@media (min-width: 550px) {
    #grid div {
        width: calc(100% / 3);
    }
}

.grid-item h2 {
    font-size: 2em;
    color: #eee;
}
.grid-item h3 {
    font-size: 1em;
    color: #eee;
}

.grid-item img {
    max-width: 100%;
    padding-bottom: 1em;
}

.grid-item p {
    background: rgba(000,000,000, .3);
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0.8em 0.8em 1.8em;
    margin:0;
    box-sizing: border-box;
    font-size: 1.2em;
    font-weight: 600;
    color: #fff;
}

/* Form Styles */
.form-container {
    background: #eee;
    padding: 1.3em;
    text-align: left;
    max-width: 400px;
    margin: 0 auto;
}

form p {
    margin-bottom: 0.3em;
    font-size: 1.3em;
    font-weight: 600;
    font-family: 'Oswald', sans-serif;
}

input {
    padding: 0.7em;
    background: #fff;
    border: 0;
}

.form-field__short {
    width: 25%;
    margin-right: 3%;
    box-sizing: border-box;
}

.form-field__full {
    width: 100%;
    box-sizing: border-box;
}

select {
    display: block;
}

#btn {
    display: inline-block;
    background: #ccc;
    padding: 0.8em;
    margin: 1.2em auto;
    transition: ease 0.3s all;
}

#btn:hover {
    background: #777;
    color: #fff;
    cursor: pointer;
}

/* Footer */
.fine-print {
    display: block;
    font-size: 0.7em;
}
``` 

5. Create a file called `app.js` and add the following content
```
// Add some JavaScript for interactivity ;-)
```

The above code presents a HTML page to present a list of languages.

## Running the code

* Open the file `index.html` in a browser

## Example Output

#### Display the web content

![small-talk](https://github.com/rosera/serverless-bootcamp/blob/main/sdp-2-serverless/images/01-lab-small-talk.png "Small Talk app")

