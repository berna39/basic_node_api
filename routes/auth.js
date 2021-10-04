const router = require('express').Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const checkAuth = require('../midlewares/checkAuth');

router.get('/users/findAll',checkAuth,userController.findAll)
router.post('/users/create',userController.createUser);
router.patch('/users/update/:id',checkAuth,userController.updateUser);
router.delete('/users/delete/:id',checkAuth,userController.deleteUser);

router.post('/login',authController.login);
module.exports = router;