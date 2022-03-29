import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { register } from "../../Apiactions/userapis";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ErrorMessage from "../../Components/ErrorMessage";

function RegisterScreen({ history }) {
  const [email, setEmail] = useState("");
  const [ispatient, setIspatient] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [er, setError] = useState(false);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(ispatient+"jooooo");
    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else dispatch(register(name, email, ispatient, password));
  };

  return (
    <div class="container w-50 border border-primary mt-2 px-4 py-1">
      <h1
        style={{ fontSize: "36px", fontFamily: "Trebuchet MS", color: "black" }}
        class="d-flex justify-content-center text-primary m-1"
      >
        REGISTER
        <img
          style={{width: "40px", height: "40px", marginTop: "0px", marginLeft: "5px",}}
          src="/Capture1.PNG"
          alt="Italian Trulli"
        ></img>
      </h1>
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
            <label className="d-block" for="ipatient">Are you a patient?</label>     
            <div  className="row ml-4">
            <label className="form-check-label" for="flexCheckDefault1"> Yes</label>
            <input id="flexCheckDefault1" className="form-check-input" type="checkbox" name="flexCheckDefault1" value="true" onChange={(e) => setIspatient(e.target.value)}/>
            </div>
            <div className="row ml-4">
              <label className="form-check-label" for="flexCheckDefault2">No</label>
              <input id="flexCheckDefault2" className="form-check-input" type="checkbox" name="flexCheckDefault2" value="false" onChange={(e) => setIspatient(e.target.value)}/>
            </div>
            <div className="form-group mt-1">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required class="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="form-group mt-1">
                <label for="examplepassword">Confirm Password</label>
                <input placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required class="form-control" id="examplepassword"/>
            </div>
            <div className="d-flex justify-content-center">
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
