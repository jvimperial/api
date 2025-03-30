const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoryValues = {
  type: Number,
  default: 0
}

const ProgressSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  classic: [{
    category: {
      type: String,
      enum: ["abnormal", 'developmental', "psychological", "industrial", "general"],
      required: true
    },
    level: {
      type: Number,
      default: 0,
    }
  }],
  mastery: [{
    category: {
      type: String,
      enum: ["abnormal", 'developmental', "psychological", "industrial", "general"],
      required:true
    },
    level: {
      type: Number,
      default: 0,
    }
  }]
})

const ProgressModel = mongoose.model("progress", ProgressSchema);

module.exports = ProgressModel;