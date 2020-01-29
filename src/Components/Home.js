import React from 'react';
// import { render } from '@testing-library/react';
// import { Row } from 'react-bootstrap';

class Home extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render(){
        console.log(this.props);
        console.log(this.state);
        return(
            <div>
                Home
            </div> 
        )
    }
}

export default Home;