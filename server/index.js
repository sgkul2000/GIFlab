const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static( __dirname + '/public'));
app.get('/.*/',(req, res) => res.sendFile(__dirname+'/public/index.html'));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
