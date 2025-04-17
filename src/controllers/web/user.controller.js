const UserModel = require('../../models/web/User');

const getWebUsers = (req,res)=>{
    UserModel.find()
     .then(users => res.json(users))
     .catch(err=>{
        console.log(err)
        res.status(500).json({error:"Internal Server Error"});
     });
};

module.exports = {getWebUsers};