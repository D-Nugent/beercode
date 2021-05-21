const {pool} = require('./db.model');
const mysql = require('mysql');

const getAllCategories = result => {
  pool.query(`SELECT * FROM tutorialCategories`, (err,res) => {
    err?result(err,null):result(null,res);
    return;
  })
}

const getTutorials = (categoryName,result) => {
  pool.query(`SELECT * FROM tutorialCategories LEFT JOIN tutorialList USING(categoryId) WHERE categoryName=${mysql.escape(categoryName)}`, (err,res) => {
    err?result(err,null):result(null,res);
    return;
  })
}

const getTutorialDetails = (tutorialId,result) => {
  pool.query(`SELECT * FROM tutorialDetails WHERE tutorialId=${mysql.escape(tutorialId)}`, (err,res) => {
    err?result(err,null):result(null,res);
    return;
  })
}

const incrementViews = (tutorialId,result) => {
  pool.query(`
  UPDATE tutorialDetails
  SET tutorialViews = tutorialViews + 1
  WHERE tutorialId=${mysql.escape(tutorialId)}`, (err,res) => {
    err?result(err,null):result(null,res);
    return;
  })
}

const incrementLike = (tutorialId,result) => {
  pool.query(`
  UPDATE tutorialDetails
  SET tutorialLikes = tutorialLikes + 1
  WHERE tutorialId=${mysql.escape(tutorialId)}`, (err,res) => {
    err?result(err,null):result(null,res);
    return;
  })
}

const decrementLike = (tutorialId,result) => {
  pool.query(`
  UPDATE tutorialDetails
  SET tutorialLikes = tutorialLikes - 1
  WHERE tutorialId=${mysql.escape(tutorialId)}`, (err,res) => {
    err?result(err,null):result(null,res);
    return;
  })
}

module.exports = {
  getAllCategories,
  getTutorials,
  getTutorialDetails,
  incrementViews,
  incrementLike,
  decrementLike
}