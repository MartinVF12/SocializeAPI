const User = require('../models/User');

const usersController = {
    // Get all users
    getAllUsers(req, res) {
        User.find({})
            .then(users => res.json(users))
            .catch(err => res.status(500).json(err));
    },

    // Get a single user by id
    getUserById(req, res) {
        User.findById(req.params.userId)
            .then(user => res.json(user))
            .catch(err => res.status(404).json(err));
    },

    // Create a new user
    createUser(req, res) {
        User.create(req.body)
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err));
    },

    // Update a user by id
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true })
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err));
    },

    // Delete a user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then(user => {
                // Remove the user from the friends' lists of other users
                User.updateMany({ friends: req.params.userId }, { $pull: { friends: req.params.userId } })
                    .then(() => res.json({ message: 'User and their friendships deleted successfully' }))
                    .catch(err => res.status(500).json(err));
            })
            .catch(err => res.status(404).json(err));
    },

    // Add a friend
    addFriend(req, res) {
        User.findByIdAndUpdate(
            req.params.userId,
            { $addToSet: { friends: req.params.friendId } }, // Use $addToSet to prevent duplicates
            { new: true }
        )
            .populate('friends') // Optional: if you want to return the populated list of friends
            .exec((err, user) => {
                if (err) return res.status(500).json(err);
                return res.json(user);
            });
    },

    // Remove a friend
    removeFriend(req, res) {
        User.findByIdAndUpdate(
            req.params.userId,
            { $pull: { friends: req.params.friendId } },
            { new: true }
        )
            .populate('friends') // Optional: if you want to return the populated list of friends
            .exec((err, user) => {
                if (err) return res.status(500).json(err);
                return res.json(user);
            });
    }
};

module.exports = usersController;
