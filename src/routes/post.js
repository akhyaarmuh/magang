import express from 'express';

// import verifyToken from '../middleware/verifyToken.js';
import postController from '../controller/post.js';

const router = express.Router();

router.post('/', postController.createPost);
router.get('/', postController.getAllPost);
router.get('/:id', postController.getPost);
router.patch('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

export default router;
