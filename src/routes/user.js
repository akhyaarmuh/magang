import express from 'express';

import verifyToken from '../middleware/verifyToken.js';
import userController from '../controller/user.js';

const router = express.Router();

router.post('/', verifyToken, userController.createUser);
router.post('/registrasi', userController.createUser);
router.get('/', verifyToken, userController.getAllUser);
router.get('/login', userController.login);
router.patch('/:id', verifyToken, userController.updateUser);
// router.delete('/logout', () => {});
router.delete('/:id', verifyToken, userController.deleteUser);

export default router;
