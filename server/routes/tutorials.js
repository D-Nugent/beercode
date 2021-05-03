const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.route('/')
.get((_req, res) => {
  fs.readFile(path.join(process.cwd(),'/tempData/tutorials.json'), (err, data) => {
    err? res.status(500).send('Unable to read file'): res.status(200).json(JSON.parse(data))
  })
})

module.exports = router;