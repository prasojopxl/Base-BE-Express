const {User} = require('../../../models');

module.exports =  async (req,res)=> {
    const body = req.body;
  
    if (!body.name || !body.email ) return res.status(400).json({
      message: "name or email null"
    })
  
    const user = await User.create(body)
    return res.json(user)
}