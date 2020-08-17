# Small Talk

## Scenario

Learn to build a statice web page that presents a grid of different languages.

## Updating the static web page

1. Edit the file called `index.html`
2. Amend main section to add a country flag

```
<!DOCTYPE html>
<html lang="en">
<head>
.
.
.
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
              <img src="https://www.countryflags.io/FR/shiny/64.png" alt="French">
          </div>
          <div class="grid-item" id=".grid-item:nth-child(2)">
              <h2>Spanish</h2>
              <img src="https://www.countryflags.io/ES/shiny/64.png" alt="Spanish"> 
          </div>
          <div class="grid-item" id=".grid-item:nth-child(3)">
              <h2>Japanese</h2>
              <img src="https://www.countryflags.io/JP/shiny/64.png" alt="Japanese">
          </div>
          <div class="grid-item" id=".grid-item:nth-child(4)">
              <h2>Chinese (Simplified)</h2>
              <img src="https://www.countryflags.io/CN/shiny/64.png" alt="Chinese">
          </div>
          <div class="grid-item" id=".grid-item:nth-child(5)">
            <h2>English</h2>
            <img src="https://www.countryflags.io/GB/shiny/64.png" alt="English">
          </div>
          <div class="grid-item" id=".grid-item:nth-child(6)">
            <h2>Hindi</h2>
            <img src="https://www.countryflags.io/IN/shiny/64.png" alt="India"> 
          </div>
          <div class="grid-item" id=".grid-item:nth-child(7)">
            <h2>Portuguese</h2>
            <img src="https://www.countryflags.io/BR/shiny/64.png" alt="Brazil"> 
          </div>
          <div class="grid-item" id=".grid-item:nth-child(8)">
            <h2>Bengali</h2>
            <img src="https://www.countryflags.io/BD/shiny/64.png" alt="Bangladesh"> 
          </div>
          <div class="grid-item" id=".grid-item:nth-child(9)">
            <h2>Russian</h2>
            <img src="https://www.countryflags.io/RU/shiny/64.png" alt="Russia">
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

The above code presents a HTML page to present a list of languages.

## Running the code

* Open the file `index.html` in a browser

## Example Output

#### Display the web content

![small-talk](https://github.com/rosera/serverless-bootcamp/blob/master/sdp-2-serverless/images/02-lab-small-talk.png "Small Talk app")

