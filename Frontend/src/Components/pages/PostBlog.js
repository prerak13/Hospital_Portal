import React, { useState, useEffect } from "react";
import { postBlog } from '../../Store/store';


const PostBlog = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [userInfo, setUserInfo] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data={
            title,
            description,
            content
        }
        console.log(data);

        const result=await postBlog(data);
        console.log(result);
    }

    useEffect(() => {
        setUserInfo(JSON.parse(localStorage.getItem("userInfo")))
      }, [])
    if(!userInfo.isPatient){
        return (
            <div className="main-container">
                <h1 className="main-heading">
                    <center>BLOG PAGE</center></h1>
                <form onSubmit={handleSubmit} method="POST">
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls">
                            <label for="blogtitle">Title</label>
                            <input type="text" id="blogtitle" name="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} class="form-control">
                            </input>
                        </div>
                    </div>
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls">
                            <label for="blogdescription">Description</label>
                            <textarea id="blogdescription" name="description" placeholder="Description" onChange={(e) => setDescription(e.target.value)} class="form-control">
                            </textarea>
                        </div>
                    </div>
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls">
                            <label for="blogcontent">ImageURL</label>
                            <input type="text" name="content" id="blogcontent" placeholder="Content ..." onChange={(e) => setContent(e.target.value)} cols="30" rows="10" class="form-control"></input>
                        </div>
                    </div>
                    <div class="form-group my-4 text-center">
                        <button type="submit" class="btn btn-primary">Create Post</button>
                    </div>
                </form>
            </div>
        );
    } else {
        return (
            <div className="main-container">
                <h1 className="main-heading">
                    <center>BLOG PAGE</center></h1>
                <br />
                <br />
                <br />
                <h3>Unfortunately! You don't have access to post a Blog</h3>
            </div>
        );
    }
    
};

export default PostBlog;
