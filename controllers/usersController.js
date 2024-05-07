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
            .then(user => res.json({ message: 'User deleted successfully' }))
            .catch(err => res.status(404).json(err));
    }
};

module.exports = usersController;
