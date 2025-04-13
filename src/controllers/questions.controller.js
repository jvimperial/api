const QuestionsModel = require('../models/Questions')

async function getQuestions(req, res) {
  try {
    const queries = {};
    const { category, level } = req.query
    if(category) queries.category = category;
    if(level) queries.level = level;

    const questions = await QuestionsModel.find(queries)
    res.json(questions)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function addQuestion(req, res) {
  try {
    const newQuestion = new QuestionsModel(req.body);
    const question = await newQuestion.save();
    res.json(question);
  } catch (error) {
    res.status(422).json({ error })
  }
}

async function updateQuestion(req, res) {
  try {
    const update = await QuestionsModel.updateMany(
      {},
      { $set: {category: 'developmental', level: 1 }}
    );
    
    res.json(update);
  } catch (error) {
    res.status(422).json({ message: error.message })
  }
}

module.exports = { getQuestions, addQuestion, updateQuestion }