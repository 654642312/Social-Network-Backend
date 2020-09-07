import { model, Schema, Document } from 'mongoose'

export interface IMessage extends Document { 
   userName: string
   imgUser: string
   content: string
   pageId: string
}

const MessageSchema: Schema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    imgUser: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    pageId: {
        type: String,
        required: true
    }
})

export default model<IMessage>('message', MessageSchema)