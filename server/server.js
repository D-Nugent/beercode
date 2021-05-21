const express = require('express');
const app = express();
const cors = require('cors');
const tutorials = require('./routes/tutorials');
const contact = require('./routes/contact');
require('dotenv').config();

app.use(express.json())
app.use(cors())
app.use((req, _res, next) => {
  console.log(`The path '${req.path}' was targeted at ${new Date().toLocaleTimeString()}`);
  next();
})

app.use('/tutorials',tutorials)
app.use('/contact',contact)

app.listen(process.env.PORT, (err) => (err ? console.error(err):console.log('Look at me go!')))