# Frontend


## Clone t


## Language Setup

Languages are dynamically enabled via the `language.json` file

An example language file is provided in the `public/data/` directory e.g.

```
{
  "Translations": [
    {
      "language":"French",
      "flag": "https://www.countryflags.io/FR/shiny/64.png",
      "text": "fr", 
      "speech": "fr-FR"
    }
  ]
}
```

The main things to note about this files fields:

* language - name of the Language
* flag - image url for the flag to be displayed
* text - language for [text translation](https://cloud.google.com/translate/docs/languages)
* speech - language for the [speech translation](https://cloud.google.com/text-to-speech/docs/voices) 



## Backend Setup


- [ ] Enable Speech Googleapi
- [ ] Enable Text Googleapis


## Frontend Setup

- [ ] Enable region
- [ ] Enable Cloud Run Managed Platform
- [ ] Replace the TEXT_ENDPOINT with the Text Cloud Function URL
- [ ] Replace the SPEECH_ENDPOINT with the Speech Cloud Function URL
- [ ] Replace the STORAGE_BUCKET with the PROJECT based storage location


 
