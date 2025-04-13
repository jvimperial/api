const mongoose = require('mongoose')

const choiceSchema = new mongoose.Schema({
  letter: {
    type: String,
    enum: ["a", "b", "c", "d"],
    required: true
  },
  text: {
    type: String,
    required: true
  },
  rationale: String,
  isCorrect: {
    type: Boolean,
    default: false
  }
}, { _id: false })

const QuestionsSchema = new mongoose.Schema({
  category:{
    type:String,
    enum: ["abnormal", "developmental", "psychological", "industrial", "general"]
  },
  level: Number,
  question:{
    type: String,
    required: true
  },
  choices: [choiceSchema],
  rationale: String,
  answer:{
    type:String,
    enum:["a", "b", "c", "d"]
  },
  ytlink:String,
  image:String,
})

const QuestionsModel = mongoose.model("questions", QuestionsSchema)

module.exports = QuestionsModel;