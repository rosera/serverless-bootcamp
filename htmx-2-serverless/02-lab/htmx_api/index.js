const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

// app.get('/calc', async (req, res) => {
//   return res.status(200).send(res.body);
// });
 
app.post('/calc', (req, res) => {
  console.log(req.body)
  const hectares = parseInt(req.body.hectares)
  const formula = 2.471

  // Perform calculation
  return res.status(200).send(`${hectares * formula}`);
});

app.listen(PORT, () => {
    console.log(`HTMX REST API listening on port ${PORT}`);
});
