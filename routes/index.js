const express = require('express');
const router = express.Router();
const db = require('../models')
const  {sequelize} = db


/* GET home page. */
router.get('/', async function (req, res, next) {
  // res.render('index', { title: 'Express' });

  const data = await sequelize.query("select * from users");

  console.log("data", data)

});

module.exports = router;