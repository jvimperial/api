const mongoose = require('mongoose');
const uri = process.env.MONGO;

const clientOptions = { 
  serverApi: { 
    version: '1', 
    strict: true, 
    deprecationErrors: true 
  } 
};

const connectMongoose = async (callback) => {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    console.log("Connected to MongoDB!");
    callback();
  } catch (err) {
    console.error(err);
  }
}

module.exports = connectMongoose