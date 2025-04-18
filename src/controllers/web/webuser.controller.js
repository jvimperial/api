const WebUsersModel = require('../../models/web/WebUser');

async function getWebUsers(req, res) {
  try {
    const webusers = await WebUsersModel.find()
    res.json(webusers)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error })
  }
}

async function getWebUser(req, res) {
  try {
    const id = req.params.id

    const webuser = await WebUsersModel.findOne({id})
    res.json(webuser)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error })
  }
}


module.exports = {getWebUsers}