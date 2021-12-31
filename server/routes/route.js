const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', userController.signup);

router.post('/login', userController.login);

router.post('/addRole', userController.allowIfLoggedin, userController.checkAddAccess('Role'));

router.post('/addImage', userController.allowIfLoggedin, userController.checkAddAccess('Image'));

router.post('/updateImage', userController.allowIfLoggedin, userController.updateImage);

router.post('/deleteImage', userController.allowIfLoggedin, userController.deleteImage);

router.get('/getImages', userController.allowIfLoggedin, userController.getImages);

module.exports = router;