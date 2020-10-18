import express from 'express';
import path from 'path';
import commentController from '../controller/commentController';

const router = express.Router();

router.use(express.static(path.join(__dirname, "../../watson-client/", "build")));
router.post('/addComment', commentController.createComment);
router.get('/getAllComments', commentController.getAllComments);
router.delete('/deleteComment/:id', commentController.deleteComment);
router.get('/getCommentAudio/:id/:voice', commentController.getAudio);
router.get('/listVoices', commentController.listVoices);

// router.use(express.static("public"));

export default router;