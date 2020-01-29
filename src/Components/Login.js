import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { Row, Container, Col, Card } from 'react-bootstrap';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import auth from '../Auth'

function Login(props) {

    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory()


    let changeMailHandler = event => {
        setEmail(event.target.value);
    };
    let changePassHandler = event => {
        setPassword(event.target.value);
    };

    let submit = event => {
        event.preventDefault();
        console.log(history);
        auth.Authenticate({Email,password},()=>{
            history.push('/home',{Email});
        })

    };
    
    return !auth.isAuthenticated ?
        (<Container>
            <Row style={{ height: '70vh' }}>
                <Col className="my-auto">
                    <Card style={{ width: '410px' }} className="mx-auto text-center shadow">
                        <Card.Header className="bg-info text-light font-weight-bold h5">Login BMS</Card.Header>
                        <Card.Body>
                            <form onSubmit={submit}>

                                <input type="text" className="form-control mb-3"
                                    name="Email" placeholder="Your Email" value={Email}
                                    onChange={changeMailHandler} required />

                                <input type="password" value={password}
                                    className="form-control mb-3" name='password' placeholder="Your Password"
                                    onChange={changePassHandler} required />

                                <input type="submit" className="btn btn-info shadow ml-auto" value="Login" />
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        ) :
         (<div>
                {props.children}
            </div>);

}

export default Login;