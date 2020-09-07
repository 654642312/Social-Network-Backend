import { Router } from 'express'
import { 
    getPosts, 
    getOnePost,
    createPost, 
    updatePost, 
    deletePost
 } from '../controllers/post.controller'

const router: Router = Router()

router.route('api/create-post')
    .get(getPosts)
    .post(createPost)

router.route('api/create-post/:id')
    .get(getOnePost)
    .put(updatePost)
    .delete(deletePost)

export default router

