const Thought = require('../models/Thought');

const reactionsController = {
    // Add a reaction to a thought
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $push: { reactions: req.body } },
            { new: true }
        )
            .then(thought => res.json(thought))
            .catch(err => res.status(400).json(err));
    },

    // Remove a reaction from a thought
    removeReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { new: true }
        )
            .then(thought => res.json(thought))
            .catch(err => res.status(404).json(err));
    }
};

module.exports = reactionsController;
