import { model, Schema, Document  } from 'mongoose';

export interface IPost extends Document {
   userName: 'string';
   description: 'string';
   imgUser: 'string';
   imgPost: 'string'; 
}

const PostSchema = new Schema({
   username: {
      type: String,
      unique: true,
      required: true,
   },
   description: {
      type: String,
   },
   imgUser: {
      type: String,
      required: true
   },
   imgPost: {
     type: String,
     required: true
   }

});


export default model<IPost>('post',PostSchema);
