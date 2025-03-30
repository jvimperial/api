require("dotenv").config()

const express = require('express');
const cors = require('cors');
const userRoutes = require('./src/routes/routes');

const PORT = process.env.PORT || 8080

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const connectMongoose = require("./src/connectMongo")
connectMongoose(() => {
  app.use('/api/', userRoutes);
  
  app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
  });
});
