const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessagesSchema = new Schema({
  chat_id: {
    type: Schema.Types.ObjectId,
    ref: 'chats',
  },
  sender_id: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  recepient_id: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  ai_generated: Boolean,
  content:{
    type: String,
    required: true
  },
  time_sent: {
    type: Date,
    default: Date.now()
  }
}, { timestamps: true })

const MessagesModel = mongoose.model("messsages", MessagesSchema)

module.exports = MessagesModel;