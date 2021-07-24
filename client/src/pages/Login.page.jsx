import React from "react";
import './general.scss'
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";

//redux
import { login } from "../redux/action";


const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: { "Access-Control-Allow-Origin": "*" },
});

const Login = ({login}) => {
  const [invalid, setInvalid] = React.useState(false)
  const [message, setMessage] = React.useState("")
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const submitForm = async () => {
    if (username !== "" && password !== "")
      await api
        .post("/login", { username, password })
        .then((res) => {
          console.log(res.data)
          if (res.data=== true){
            setInvalid(false)
            login({username: username, isAuthenticated: true})
          }else if (res.data === false){
            setInvalid(true)
            setMessage("Password is incorrect !")
          }else{
            setInvalid(true)
            setMessage(res.data)
          }
        })
        .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="boxy">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              isInvalid={invalid}
            />
            <Form.Control.Feedback type="invalid">
              {message}
            </Form.Control.Feedback>
          </Form.Group>
          <div className="text-center">
             <Button variant="primary" onClick={()=>submitForm()}> 
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});
const mapDispatchToProps = (dispatch) => ({
  login : (auth) => dispatch(login(auth))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
