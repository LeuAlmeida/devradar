const express = require('express');

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
  return res.json({ok: 'Hello World'});
});

app.listen(3335);