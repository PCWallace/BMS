import React, { useState } from "react";
import { Row, Container, Col, Card } from "react-bootstrap";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import auth from "../Services/Auth";


function Login(props) {
  const [username, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const [loginError, updateError] = useState("");

  let history = useHistory();
  let changeMailHandler = event => {
    updateEmail(event.target.value);
  };
  let changePassHandler = event => {
    updatePassword(event.target.value);
  };

  let submit = event => {
    event.preventDefault();
    auth.Authenticate({ username, password }, (auth) => {
        if(auth === ''){
            console.log(props);
            history.push("/home");
        }else{
            updateError(auth);
        }
    });
  };
  return !auth.isAuthenticated ? (
    <Container>
      <Row style={{ height: "70vh" }}>
        <Col className="my-auto">
          <Card
            style={{ width: "30vw" }}
            className="mx-auto text-center shadow"
          >
            <Card.Header className="bg-info text-light h5">
              Login BMS
            </Card.Header>
            <Card.Body>
              <form onSubmit={submit}>
              {
                    (loginError !== '')? <div className="alert alert-danger py-1">{loginError}</div> : <div></div>
              }
                <input
                  type="text"
                  className="form-control mb-3"
                  name="Email"
                  placeholder="Your Email"
                  value={username}
                  onChange={changeMailHandler}
                  required/>

                <input
                  type="password"
                  value={password}
                  className="form-control mb-3"
                  name="password"
                  placeholder="Your Password"
                  onChange={changePassHandler}
                  required/>

                <input
                  type="submit"
                  className="btn btn-info shadow"
                  value="Login"/>

              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  ) : ( props.children );
}

export default Login;
