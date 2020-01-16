require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}${process.env.MONGO_CLUSTER}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.get('/', (req, res) => res.json({ ok: 'Hello World' }));

app.listen(3335);
