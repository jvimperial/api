const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProgressSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    unique: true
  },
  classic: {
    abnormal: {
      type: Number,
      default: 0
    },
    developmental: {
      type: Number,
      default: 0
    },
    psychological: {
      type: Number,
      default: 0
    },
    industrial: {
      type: Number,
      default: 0
    },
    general: {
      type: Number,
      default: 0
    }
  },
  mastery: {
    abnormal: {
      type: Number,
      default: 0
    },
    developmental: {
      type: Number,
      default: 0
    },
    psychological: {
      type: Number,
      default: 0
    },
    industrial: {
      type: Number,
      default: 0
    },
    general: {
      type: Number,
      default: 0
    }
  }
})

const ProgressModel = mongoose.model("progress", ProgressSchema);

module.exports = ProgressModel;