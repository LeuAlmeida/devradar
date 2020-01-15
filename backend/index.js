const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({ok: 'Hello lWorld'});
});

app.listen(3335);