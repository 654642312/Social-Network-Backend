import { Router } from 'express'
import multer from '../libs/multer'
import { 
    getPosts, 
    getOnePost,
    createPost, 
    updatePost, 
    deletePost
 } from '../controllers/post.controller'

const router: Router = Router()

router.route('/api/post')
    .get(getPosts)
    .post(multer.single('imgPost'), createPost)

router.route('/api/post/:id')
    .get(getOnePost)
    .put(updatePost)
    .delete(deletePost)

export default router

