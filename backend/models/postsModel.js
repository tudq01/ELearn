import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
            default: 'Internet',
        },
        likeCount: {
            type: Number,
            default: 0,
        }
    }
) 

export const postsModel = mongoose.model('Tips', PostSchema);