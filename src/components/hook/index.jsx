import React from "react";

import Blogs from "./Blogs";
import Comments from "./Comments";
import BlogDataSource from "../../data/BlogDataSource";
import CommentDataSource from "../../data/CommentDataSource";


const Hooks = () => {
    return (
        <>
            <h1>Pure Hooks</h1>
            <Blogs />
            <Comments />
        </>
    )
};

export default Hooks;
