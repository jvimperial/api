const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChatsSchema = new Schema({
  participants: [{
    type: Schema.Types.ObjectId,
    ref: 'users',
  }],
  lastMessageId: {
    type: Schema.Types.ObjectId,
    ref: 'messages',
  },

})

const ChatsModel = mongoose.model("chats", ChatsSchema);

module.exports = ChatsModel;