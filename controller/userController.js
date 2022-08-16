const User = require('../model/model');

const createUser = async(req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ user });
    } catch (error) {
        console.log(error);
    }
};

const updateUser = async(req, res) => {
    try {
        const { id: userID } = req.params;
        const userUpdate = await User.updateOne({ "_id": userID }, { $set: req.body });
        const user = await User.find({ _id: userID });

        res.status(200).json({ user });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createUser,
    updateUser
};