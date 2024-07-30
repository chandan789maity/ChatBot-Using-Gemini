import { Router } from 'express';

//import { loginUser, logoutUser, registerUser } from '../controllers/user.controller.js';
//import { upload } from '../middlewares/multer.middleware.js';
//import { verifyJWT } from '../middlewares/auth.middleware.js';
import { ChatUser } from '../controllers/chat.controller.js';

const router = Router();

router.route('/chat').post(ChatUser);
// secured routes
//router.route('/logout').post(verifyJWT, logoutUser);

export default router;