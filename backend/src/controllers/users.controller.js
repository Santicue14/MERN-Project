const userCtrl = {};

const User = require('../models/User');

userCtrl.getUsers = async (req,res) => {
    const users = await User.find()
    res.json(users)
}

userCtrl.createUser = async (req,res) => {
    const {username, fullname} = req.body
    const newUser = new User({username,fullname});
    await newUser.save()
    res.json({message: "User created"})
}
userCtrl.deleteUser = async(req,res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json({message: "User deleted"})}

userCtrl.getUser = async(req,res) => {
    const user = await User.findById(req.params.id)
    res.json(user)}

module.exports = userCtrl;
