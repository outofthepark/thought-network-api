const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThought);

// /api/thoughts/<userId>
router
    .route('/:userId')
    .post(addThought);

router
    .route('/:userId/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

router
    .route('/:userId/:thoughtId/reactions')
    .put(addReaction)

router
    .route('/:userId/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;