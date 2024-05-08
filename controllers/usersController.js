const User = require('../models/User');

const usersController = {
    getAllUsers(req, res) {
        User.find({})
            .populate('friends')
            .then(users => res.json(users))
            .catch(err => res.status(500).json(err));
    },

    getUserById(req, res) {
        User.findById(req.params.userId)
            .populate('friends')
            .then(user => res.json(user))
            .catch(err => res.status(404).json(err));
    },

    createUser(req, res) {
        User.create(req.body)
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err));
    },

    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true, runValidators: true })
            .populate('friends')
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err));
    },

    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then(user => User.updateMany(
                { friends: req.params.userId },
                { $pull: { friends: req.params.userId } }
            ))
            .then(() => res.json({ message: 'User and their friendships deleted successfully' }))
            .catch(err => res.status(500).json(err));
    },

    addFriend(req, res) {
        User.findByIdAndUpdate(
            req.params.userId,
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        )
            .populate('friends')
            .then(user => res.json(user))
            .catch(err => res.status(500).json(err));
    },

    removeFriend(req, res) {
        User.findByIdAndUpdate(
            req.params.userId,
            { $pull: { friends: req.params.friendId } },
            { new: true }
        )
            .populate('friends')
            .then(user => res.json(user))
            .catch(err => res.status(500).json(err));
    }
};

module.exports = usersController;
