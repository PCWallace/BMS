import React from 'react';
// import { render } from '@testing-library/react';
import { Row, Container, Col, Card} from 'react-bootstrap';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
// import Home from './Home';
import auth from '../Auth'

class Login extends React.Component {

    constructor({child, ...rest}) {
        super({child, ...rest})
        
        this.state = {
            Email: '',
            password: ''   
        }
        this.history = useHistory();
    }
    
    changeMailHandler = event => {
        this.setState({ Email: event.target.value });
      };
    changePassHandler = event => {
        this.setState({ password: event.target.value });
      };

    submit = event => {
        event.preventDefault();
        auth.Authenticate({...this.state},()=>{
            console.log(this.props);
            
            this.props.history.push('/home');
        });
      }; 

    render() {
        return !auth.isAuthenticated ? 
            (
            <Container>
                    <Row style={{ height: '70vh' }}>
                        <Col className="my-auto">
                            <Card style={{width:'30vw'}} className="mx-auto text-center">
                                <Card.Header>Login BMS</Card.Header>
                                <Card.Body>
                                <form onSubmit={this.submit}>
    
                                    <input type="text" className="form-control mb-3"
                                    name="Email" placeholder="Your Email"  value={this.state.empId}
                                    onChange={this.changeMailHandler} required/>
    
                                    <input type="password" value={this.state.password}
                                    className="form-control mb-3" name='password' placeholder="Your Password"
                                    onChange={this.changePassHandler} required/>
    
                                    <input type="submit" className="btn btn-info" value="Login" />
                                </form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
        ):(this.child);
    }
}

export default Login;