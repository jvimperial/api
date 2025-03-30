const mongoose = require('mongoose')

const QuestionsSchema = new mongoose.Schema({
  question:String,
  choices:[{
    letter:String,
    text:String,
    rationale:String,
  }],
  answer:String,
  ytlink:String,
  image:String,
})

const QuestionsModel = mongoose.model("questions", QuestionsSchema)

module.exports = QuestionsModel;