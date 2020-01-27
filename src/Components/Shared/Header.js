import React from 'react';
import { render } from '@testing-library/react';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" sticky="top">
                    <Navbar.Brand href="home">BMS</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end  text-white">
                        <Nav className="mr-auto">
                            <Nav.Link href="home">Home</Nav.Link>
                        </Nav>
                        <Navbar.Text>
                            <a href="login">Pratyush</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;