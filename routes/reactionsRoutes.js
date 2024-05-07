const router = require('express').Router({ mergeParams: true });
const {
    addReaction,
    removeReaction
} = require('../controllers/reactionsController');

// Necesitamos accesso al thoughtId para estas rutas, por eso usamos mergeParams
router.route('/')
    .post(addReaction);

router.route('/:reactionId')
    .delete(removeReaction);

module.exports = router;
