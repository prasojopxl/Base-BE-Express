const {User} = require('../../../../models');

//Get By ID
module.exports = async (req,res) => {
    const {userId} = req.params
    const data = await User.findByPk(userId)
    if (!data) return res.status(404).json({
        message: "User Not Found"
    })

    await data.update(req.body)

    return res.json(data)
}
