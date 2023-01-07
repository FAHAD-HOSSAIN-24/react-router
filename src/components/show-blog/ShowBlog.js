import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowBlog = () => {
    const [blog, setBlog] = useState({});
    const {blogId} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
        .then(res => res.json())
        .then(data => setBlog(data))
    }, [blogId])
    
    return (
        <div>
            <h1>Post Title</h1>
            <h2>{blog?.title}</h2>
            <h1>Post body</h1>
            <h3>{blog?.body}</h3>
        </div>
    );
};

export default ShowBlog;