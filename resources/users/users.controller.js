const User = require('./users.models');

function createUser(user) {
    return new User(user).save();
}

function getUsers() {
    return User.find({});
}

function getUser(id) {
    return User.findById(id);
}

function getUserByUsername(username) {
    return User.findOne(username)
}

function updateUser(id, user) {
    return User.findOneAndUpdate({ _id: id }, { ...user }, { new: true });
}

function deleteUser(id) {
    return User.findOneAndDelete(id);
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    getUserByUsername,
    updateUser,
    deleteUser,
}