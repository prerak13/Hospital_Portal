import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading";
import ErrorMessage from "../../Components/ErrorMessage";
import { register } from "../../Actions/userActions";
import MainScreen from "../../Components/MainScreen";
import "./RegisterScreen.css";

function RegisterScreen({ history }) {
  const [email, setEmail] = useState("");
  const [ispatient, setispatient] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState(
    "https://www.kpu.ca/sites/default/files/Career%20Services/thumbpreview-grey-avatar-designer.jp"
  );
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const postDetails = (pics) => {
    if (
      pics ===
      "https://www.kpu.ca/sites/default/files/Career%20Services/thumbpreview-grey-avatar-designer.jp"
    ) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "wecare");
      data.append("cloud_name", "wecareproj");
      fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else dispatch(register(name, email, ispatient, password, pic));
  };

  return (
    <div class="container w-50 border border-primary mt-2 px-4 py-1">
      <h1 style={{ fontSize: "36px", fontFamily: "Trebuchet MS", color:"black"}} class="d-flex justify-content-center text-primary m-1">REGISTER<img style={{width:"40px", height:"40px", marginTop:"0px", marginLeft:"5px"}} src="/Capture1.PNG" alt="Italian Trulli"></img></h1>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        <form onSubmit={submitHandler}>
            <div class="form-group mt-1">
                <label for="exampleusername">Username</label>
                <input type="name" placeholder="Enter username" onChange={(e) => setName(e.target.value)} required class="form-control" id="exampleusername"/>
            </div>
            <div class="form-group mt-1">
                <label for="exampleInputEmail12">Email address</label>
                <input  type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required class="form-control" id="exampleInputEmail12"/>
            </div>  
            <label className="" for="exampleusername">Are you a patient?</label>        
            <select class="form-control" id="pateintboolean" onChange={(e) => setispatient(e.target.value)}>                          
                <option value="true" selected="selected">Yes</option>
                <option value="false">No</option>
            </select>
            <div class="form-group mt-1">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="form-group mt-1">
                <label for="examplepassword">Confirm Password</label>
                <input placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required class="form-control" id="examplepassword"/>
            </div>
            {picMessage && (
            <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
            )}
            <div class="form-group mt-1">
                <label for="examplepic">Upload pic</label>
                <input type="file" onChange={(e) => postDetails(e.target.files[0])} label="Upload Profile Picture" class="form-control" custom id="examplepic"/>
            </div>
            <div class="d-flex justify-content-center">
                <button type="submit" required class="btn btn-primary mt-1 d-flex justify-content-center">Register</button>
            </div>
            </form>
            <Row className="py-0 text-center">
              <Col>
                Have an Account ? <Link to="/login">Login</Link>
              </Col>
            </Row>
     </div>
  );
}

export default RegisterScreen;
