import React, {useState, useEffect} from "react";
import "./Posts.css";
import Post from "../Post/Post";
import { fetchBlog } from "../../Store/store";


const Posts = () => {
	const [blogPosts, setBlogPosts] = useState([])

  const getData = () => {
    fetch('http://localhost:5000/api/blog/fetch_blog')
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data)
		setBlogPosts(res.data)
      })
  }

  useEffect(() => {
    getData()
  }, [])
console.log(blogPosts)
return (
	<div className="posts-container">
	{blogPosts.map((post, index) => (
		<Post key={index} index={index} post={post} />
	))}
	</div>
  
);
};

export default Posts;
