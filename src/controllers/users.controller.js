const UsersModel = require('../models/Users');
const ProgressModel = require('../models/Progress')

async function getUsers(req, res) {
  try {
    const users = await UsersModel.find()
    res.json(users)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error })
  }
}

async function getUser(req, res){
  try {
    const uid = req.params.uid
    
    const user = await UsersModel.findOne({ uid })
    res.json(user)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error })
  }
}

async function createUser(req, res){
  try {
    const newUser = new UsersModel(req.body);
    const user = await newUser.save()
    const newProgress = new ProgressModel({user_id:user._id})
    const progress = await newProgress.save()
    res.json([user, progress])
  } catch (error) {
    res.status(500).json({ error })
  }
}

module.exports = { getUsers, getUser, createUser }