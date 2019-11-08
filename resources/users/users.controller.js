const User = require('./users.model');

function createUser(User) {
    return new User(User).save();
}

function getUsers() {
    return User.find({});
}

function getUser(id) {
    return User.findById(id);
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
    updateUser,
    deleteUser,
}