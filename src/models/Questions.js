const mongoose = require('mongoose')

const QuestionsSchema = new mongoose.Schema({
  question:String,
  choices:[{
    letter:{
      type:String,
      enum:["a","b","c","d"],
      required:true
    },
    text:{
      type: String,
      required: true
    },
    rationale:String,
  }],
  answer:{
    type:String,
    enum:["a", "b", "c", "d"]
  },
  ytlink:String,
  image:String,
})

const QuestionsModel = mongoose.model("questions", QuestionsSchema)

module.exports = QuestionsModel;