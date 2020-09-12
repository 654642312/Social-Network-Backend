import { Router } from 'express';
import { handlerDislike } from '../controllers/dislike.controller'

const router = Router();

router.route('/api/dislike')
    .post(handlerDislike)


export default router