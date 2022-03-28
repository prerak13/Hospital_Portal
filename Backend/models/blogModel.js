import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
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
        },
    },
    {
        timestamps: {created_at: true},
    }
);

const Blog = mongoose.model("blog", blogSchema);

export default Blog;
