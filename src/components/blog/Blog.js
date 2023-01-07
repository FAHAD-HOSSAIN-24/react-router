import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Blog = (props) => {
    const {id} = props.blog
    const navigate = useNavigate()

    const showBlog = () => {
        navigate(`${id}`)
    }
    return (
        <div>
            <Link to={`${id}`}>with link</Link>
            <button onClick={showBlog}>blog-{id}</button>
        </div>
    );
};

export default Blog;