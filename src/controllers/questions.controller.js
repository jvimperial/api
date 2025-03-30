const QuestionsModel = require('../models/Questions')

async function getQuestions(req, res) {
  try {
    const users = QuestionsModel.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({error})
  }
}