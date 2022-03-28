import React, { useState, useEffect } from "react";
import { postBlog } from '../../Store/store';
import MainScreen from "../../Components/MainScreen";


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
    //     <MainScreen title="BLOG PAGE">
    //   <div>
    //     <Row className="profileContainer">
    //       <Col md={6}>
    //         <Form onSubmit={submitHandler}>
    //           {loading && <Loading />}
    //           {success && (
    //             <ErrorMessage variant="success">
    //               Updated Successfully
    //             </ErrorMessage>
    //           )}
    //           {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
    //           <Form.Group controlId="name">
    //             <Form.Label>Name</Form.Label>
    //             <Form.Control
    //               type="text"
    //               placeholder="Enter Name"
    //               value={name}
    //               onChange={(e) => setName(e.target.value)}
    //             ></Form.Control>
    //           </Form.Group>
    //           <Form.Group controlId="email">
    //             <Form.Label>Email Address</Form.Label>
    //             <Form.Control
    //               type="email"
    //               placeholder="Enter Email"
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //             ></Form.Control>
    //           </Form.Group>
    //           <Form.Group controlId="password">
    //             <Form.Label>Password</Form.Label>
    //             <Form.Control
    //               type="password"
    //               placeholder="Enter Password"
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //             ></Form.Control>
    //           </Form.Group>
    //           <Form.Group controlId="confirmPassword">
    //             <Form.Label>Confirm Password</Form.Label>
    //             <Form.Control
    //               type="password"
    //               placeholder="Confirm Password"
    //               value={confirmPassword}
    //               onChange={(e) => setConfirmPassword(e.target.value)}
    //             ></Form.Control>
    //           </Form.Group>{" "}
    //           {picMessage && (
    //             <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
    //           )}
    //           <Form.Group controlId="pic">
    //             <Form.Label>Change Profile Picture</Form.Label>
    //             <Form.File
    //               onChange={(e) => postDetails(e.target.files[0])}
    //               id="custom-file"
    //               type="image/png"
    //               label="Upload Profile Picture"
    //               custom
    //             />
    //           </Form.Group>
    //           <Button type="submit" varient="primary">
    //             Update
    //           </Button>
    //         </Form>
    //       </Col>
    //       <Col
    //         style={{
    //           display: "flex",
    //           alignItems: "center",
    //           justifyContent: "center",
    //         }}
    //       >
    //         <img src={pic} alt={name} className="profilePic" />
    //       </Col>
    //     </Row>
    //   </div>
    //   <Footer />
    // </MainScreen>
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
