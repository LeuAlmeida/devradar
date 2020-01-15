const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack:devradaromnistack@cluster0-dzmtm.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json())

app.get('/', (req, res) => {
  return res.json({ok: 'Hello World'});
});

app.listen(3335);