const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const chatsSchema = new Schema({
  members:[{
    type: Schema.Types.ObjectId,
    ref: 'users'
  }],
  messages:[
    {
      sender:{
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      message:{
        type: String,
        required: true
      },
      time: {
        type: Date,
        default: Date.now()
      }
    }
  ]

}, { timestamps: true })

const ChatsModel = mongoose.model(chatsSchema);

module.exports = ChatsModel