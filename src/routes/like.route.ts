import { Router } from 'express';
import { handlerLike } from '../controllers/like.controller'

const router = Router();

router.route('/api/like')
    .post(handlerLike)

export default router