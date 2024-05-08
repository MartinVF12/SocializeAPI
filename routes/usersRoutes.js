const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../controllers/usersController');

// Rutas para usuarios
router.route('/')
    .get(getAllUsers)
    .post(createUser);

router.route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// Rutas para gestionar la lista de amigos
router.route('/:userId/friends/:friendId')
    .post(addFriend)    // Ruta para agregar un amigo
    .delete(removeFriend);  // Ruta para eliminar un amigo

module.exports = router;
