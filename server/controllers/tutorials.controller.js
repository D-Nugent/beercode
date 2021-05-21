const {getAllCategories,getTutorials,getTutorialDetails,incrementViews,incrementLike,decrementLike} = require('../models/tutorials.model');

const findCategories = (_req, res) => {
  getAllCategories((err,data) => {
    err?res.status(500).send(err):res.send(data);
  })
}

const findTutorials = (req, res) => {
  getTutorials(req.params.categoryName, (err,data) => {
    err?res.status(500).send(err):res.send(data);
  })
}

const findTutorialDetails = (req, res) => {
  getTutorialDetails(req.params.tutorialId, (err,data) => {
    err?res.status(500).send(err):res.send(data);
  })
}

const updateViews = (req, res) => {
  incrementViews(req.params.tutorialId, (err,data) => {
    err?res.status(500).send(err):res.send(data);
  })
}

const addLike = (req, res) => {
  incrementLike(req.params.tutorialId, (err,data) => {
    err?res.status(500).send(err):res.send(data);
  })
}

const removeLike = (req, res) => {
  decrementLike(req.params.tutorialId, (err,data) => {
    err?res.status(500).send(err):res.send(data);
  })
}

module.exports = {
  findCategories,
  findTutorials,
  findTutorialDetails,
  updateViews,
  addLike,
  removeLike,
}