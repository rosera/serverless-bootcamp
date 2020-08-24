const {promisify} = require('util');
const express     = require('express');
const bodyParser  = require('body-parser');
const exec        = promisify(require('child_process').exec);
const app         = express();

app.use(bodyParser.json());

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Listening on port', port);
});

app.post('/', async (req, res) => {

  let jsonObject = [];

  try {
    const youtubePlaylist = req.body.playlist || '';   
    console.log(req.body.playlist);

    if (youtubePlaylist != '') {
      const episodeList = await parsePlaylist(youtubePlaylist);
      const temp = {};
      for (let i=0; i < episodeList.length; i++) {
        temp[i]=episodeList[i];
      }
      jsonObject = JSON.stringify(temp);
    }
  }
  catch (ex) {
    console.log(`Error: ${ex}`);
  }
  res.send(jsonObject);
})

async function parsePlaylist(videoPlaylist){
  let videoList = {};
  const cmd = 'youtube-dl -i -o "%(id)s" --get-filename --skip-download ' + videoPlaylist;
  console.log(`command to execute: ${cmd}`);
  const { stdout, stderr } = await exec(cmd);

  if (stderr){
    console.log(`stderr: ${stderr}`);
    return '';
  }
  console.log(`stdout: ${stdout}`);
  videoList = stdout.split(/[\r\n|\n|\r]/).filter(String);
  return videoList;
}

