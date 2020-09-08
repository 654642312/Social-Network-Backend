import { model, Schema, Document  } from 'mongoose'

export interface IPost extends Document {
   userId: string
   description: string
   imgPath: string
}

const PostSchema = new Schema({
   userId: {
      type: String,
      required: true,
      unique: true
   },
   description: {
      type: String,
   },
   imgPath: {
     type: String,
     required: true
   }

});


export default model<IPost>('post',PostSchema)
