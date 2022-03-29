/**
 * @author Vishal Rakesh Jaiswal
 * @email vs928999@dal.ca
 */
import React, { useState, useEffect } from "react";
import Posts from "../Posts/Posts";


const Blogs = () => {
    const [userInfo, setUserInfo] = useState([])
    useEffect(() => {
        setUserInfo(JSON.parse(localStorage.getItem("userInfo")))
      }, [])
    if(userInfo!=null){
    if(!userInfo.isPatient && !userInfo.isAdmin){
    return (
        <div className="main-container">
            <h1 className="main-heading">

                <center>Write Blog</center></h1>
                <a href="/postblog">Create your blog</a>
                
                
            <Posts />
        </div>
    );
    }
}
    else{
         return (
            <div className="main-container">

     <h1 className="main-heading">
    <center>BLOG PAGE</center></h1>
    
    
<Posts />
</div>
);
         }
};

export default Blogs;
