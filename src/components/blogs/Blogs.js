import React, { useEffect, useState } from 'react';
import Blog from '../blog/Blog';

const Blogs = () => {
    const [blogs, setblogs] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setblogs(data))
    }, [])
    return (
        <div>
            <h1>This is blog page</h1>
            <h3>Total blogs: {blogs.length}</h3>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;