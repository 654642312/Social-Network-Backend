import { model, Schema, Document } from 'mongoose'

export interface ILike extends Document { 
   userId: string
   postId: string
}

const likeSchema: Schema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'post'
    }
}, { timestamps: true })

export default model<ILike>('like', likeSchema)