import React from 'react';
import CityList from './CityList';
// import { render } from '@testing-library/react';
// import { Row } from 'react-bootstrap';

class Home extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render(){
        return(
            <div>
                <CityList />
            </div> 
        )
    }
}

export default Home;