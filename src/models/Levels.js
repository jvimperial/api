const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LevelsSchema = new Schema({
  category:{
    type: String,
    enum: ["abnormal", "developmental", "psychological", "industrial", "general"]
  },
  level: Number,
  questions:[
    {
      type: Schema.Types.ObjectId,
      ref: 'questions',
    }
  ],
  time_limit:Number,
  oneStar: Number,
  twoStars: Number,
  threeStars: Number,
  
})