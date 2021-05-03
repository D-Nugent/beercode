const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const tutorials = require('./routes/tutorials');

dotenv.config();

app.use(express.json())
app.use(cors())
app.use((req, _res, next) => {
  console.log(`The path '${req.path}' was targeted at ${new Date().toLocaleTimeString()}`);
  next();
})

app.use('/tutorials',tutorials)

app.listen(process.env.PORT, (err) => (err ? console.error(err):console.log('Look at me go!')))