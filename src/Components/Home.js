import React from 'react';
import CityList from './CityList';
// import { render } from '@testing-library/react';
// import { Row } from 'react-bootstrap';

class Home extends React.Component{

    constructor(props) {
        console.log('hi');
        super(props)
    
        this.state = {
             
        }
    }
    
    render(){
        console.log(this.props);
        console.log(this.state);
        return(
            <div>
                <CityList />
            </div> 
        )
    }
}

export default Home;