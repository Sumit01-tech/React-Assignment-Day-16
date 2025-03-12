import React, { useEffect, useState } from "react";
import { fetchPosts } from "../services/api";
import { Post } from "../types/post";
import PostCard from "../components/PostCard";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import ErrorMessage from "../components/ErrorMessage";

const Home: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchPosts();
                setPosts(data);
            } catch (error) {
                setError("Failed to fetch posts.");
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    return (
        <div>
            <Navbar />
            <h1 style={{ textAlign: "center" }}>Posts</h1>
            {loading ? <Loader /> : error ? <ErrorMessage message={error} /> : posts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
    );
};

export default Home;
