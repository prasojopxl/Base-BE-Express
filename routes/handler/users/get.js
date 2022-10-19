const {User} = require('../../../models');

//GET ALL
module.exports = async (req,res)=> {
  const user = await User.findAll()
  return res.json(user)
}
