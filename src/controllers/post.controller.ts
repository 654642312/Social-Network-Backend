import { Request, Response } from 'express'
import Post, { IPost } from '../models/post'
import { unlink } from 'fs-extra'
import path from 'path'

export const getPosts = async (req: Request, res: Response): Promise<Response> => {
    const Posts = await Post.find()
    return res.status(200).json(Posts);
}

export const getOnePost = async (req: Request, res: Response): Promise<Response> => {
    const post: IPost | null = await Post.findById(req.params.id)
    if(post !== null){
        return res.status(200).json(post)
    }
    return res.status(400).json({'message': 'error'})
}

export const createPost = async (req: Request, res: Response): Promise<Response> => {
    console.log(req.body);
    const { userId, description } = req.body

    const imgPath: string = req.file.filename

    const newPost: IPost = new Post({
        userId, 
        description, 
        imgPath
    })

    await newPost.save()
    return res.status(200).json({'message': 'save successfully'})
}

export const updatePost = async (req: Request, res: Response): Promise<Response> => {
   
    const { description } = req.body

    const post = await Post.findByIdAndUpdate(req.params.id, { description })
    return res.status(200).json({'message': 'updated successfully'})
}


export const deletePost = async (req: Request, res: Response): Promise<Response> => {
    const post: IPost | null = await Post.findByIdAndDelete(req.params.id)
    if(post !== null){
        unlink(path.resolve('./public/uploads/' + post.imgPath))
        return res.status(200).json({'message': 'post deleted'})
    }
    return res.status(400).json({'message': 'error'})
}