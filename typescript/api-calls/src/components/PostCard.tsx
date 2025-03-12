import React from "react";
import { Post } from "../types/post";

interface PostProps {
    post: Post;
}
const PostCard: React.FC<PostProps> = ({ post }) => {
    return (
        <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};
export default PostCard;
