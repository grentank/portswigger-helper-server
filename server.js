const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs/promises');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api', async (req, res) => {
  try {
    await fs.appendFile('data.txt', `${JSON.stringify(req.body)}\n`, 'utf8');
    res.sendStatus(200);
  } catch (error) {
    const { url } = req;
    const { host } = req.headers;
    console.log(error);
    await fs.appendFile('data.txt', `ERROR: ${host} ${url} \n`, 'utf8');
    res.sendStatus(500);
  }
});

app.get('/api', async (req, res) => {
  const data = await fs.readFile('data.txt', 'utf8');
  res.send(data);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
