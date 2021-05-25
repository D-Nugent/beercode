const express = require('express');
const router = express.Router();
const {
  findCategories,
  findTutorials,
  findAllTutorials,
  findTutorialDetails,
  updateViews,
  addLike,
  removeLike,} = require('../controllers/tutorials.controller')
// const fs = require('fs');
// const path = require('path');

// router.route('/')
// .get((_req, res) => {
//   fs.readFile(path.join(process.cwd(),'/tempData/tutorials.json'), (err, data) => {
//     err? res.status(500).send('Unable to read file'): res.status(200).json(JSON.parse(data))
//   })
// })

router.route('/')
.get((req, res) => {
  // Will return all categories
  findCategories(req,res);
})

router.route('/category/:categoryName')
.get((req, res) => {
  // Will return all tutorials that belong to a category
  findTutorials(req,res);
})

router.route('/alltutorials')
.get((req, res) => {
  findAllTutorials(req,res)
})

router.route('/tutorial/:tutorialId')
.get((req, res) => {
  // Will return detailed information about a specific tutorial
  findTutorialDetails(req,res);
})
.put((req, res)=> {
  // Will increment the 'views' of an individual tutorial
  updateViews(req,res);
})

router.route('/tutorial/:tutorialId/likes')
.put((req, res) => {
  // Will incrememnt the 'likes' of an individual tutorial
  addLike(req,res);
})
.delete((req, res) => {
  // Will deccrememnt the 'likes' of an individual tutorial
  removeLike(req,res);
})

module.exports = router;