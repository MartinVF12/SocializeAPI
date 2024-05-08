const router = require('express').Router({ mergeParams: true });
const {
    addReaction,
    removeReaction
} = require('../controllers/reactionsController');

router.route('/')
    .post(addReaction);

router.route('/:reactionId')
    .delete(removeReaction);

module.exports = router;
