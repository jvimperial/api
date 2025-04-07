const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');
const termsController = require('../controllers/terms.controller')
const progressController = require('../controllers/progress.controller')

router.get('/', (req, res) => res.send(`
  <title>NU Mindify API</title>
  <h1>NU Mindify API</h1>
  <div>Example Usage: <a href="https://nu-mindify-api.vercel.app/api/getTerms">https://nu-mindify-api.vercel.app/api/getTerms</a></div>
  <style>*{text-align:center}</style>
  `))

router.get('/getUsers', usersController.getUsers);
router.get('/getUser/:uid', usersController.getUser);
router.post('/createUser', usersController.createUser);

router.get('/getTerms', termsController.getTerms)
router.post('/addTerm', termsController.addTerm)

router.get('/getProgress/:id', progressController.getUserProgress)
router.post('/progressCategory', progressController.progressCategory)

module.exports = router;