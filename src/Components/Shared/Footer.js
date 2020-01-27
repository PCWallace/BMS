import React from 'react';
import { render } from '@testing-library/react';
import { Navbar, Nav } from 'react-bootstrap';

class Footer extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark" fixed="bottom">
                    <Navbar.Collapse className="justify-content-center ">
                        <Navbar.Text>
                            Copyright 2020 
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Footer;  