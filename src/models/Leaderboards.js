const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const QuestionsModel = require('./Questions')

const LeaderboardsSchema = new Schema({
  level:String,
  category:String,
  mode:{
    type: String,
    enum:["classic", "mastery"]
  },
  scores:[{
    user_id:{
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    score: Number,
    time:Number,
    branch:String
  }]
})

const LeaderboardsModel = mongoose.model("leaderboards", LeaderboardsSchema)

module.exports = LeaderboardsModel;