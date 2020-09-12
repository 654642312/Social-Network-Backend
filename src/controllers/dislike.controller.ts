import { Request, Response } from 'express'
import Dislike, { IDisLike } from '../models/dislike'

const addDislike = async (userId: string, postId: string): Promise<void> => {
    const upDislike: IDisLike = new Dislike({ userId, postId})
    await upDislike.save()
}

const removeDislike = async (userId: Request): Promise<void> => {
    const user = await Dislike.findOneAndDelete(userId)
}

export const handlerDislike = async (req: Request, res: Response): Promise<Response> => {

    const { userId, postId } = req.body

    const user = await Dislike.find(userId)

    if(user === null){
        await addDislike(userId, postId)
        return res.status(200).json({message: 'up like sucessfully'})
    }

    await removeDislike(userId);
    return res.status(200).json({message: 'remove like successfully'})
}