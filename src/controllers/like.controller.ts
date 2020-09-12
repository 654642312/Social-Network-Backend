import { Request, Response } from 'express'
import Like, { ILike } from '../models/like'

const addLike = async (userId: string, postId: string): Promise<void> => {
    const upLike: ILike = new Like({ userId, postId})
    await upLike.save()
}

const removeLike = async (userId: Request): Promise<void> => {
    const user = await Like.findOneAndDelete(userId)
}

export const handlerLike = async (req: Request, res: Response): Promise<Response> => {

    const { userId, postId } = req.body

    const user = await Like.find(userId)

    if(user === null){
        await addLike(userId, postId)
        return res.status(200).json({message: 'up like sucessfully'})
    }

    await removeLike(userId);
    return res.status(200).json({message: 'remove like successfully'})
}