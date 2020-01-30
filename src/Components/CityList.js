import CityListService from "../Services/CityListService";
import React, { useState, useEffect } from "react";
import { Row, Container, Col, Card, Table } from "react-bootstrap";
import { Redirect, useHistory, useLocation } from "react-router-dom";


function CityList(props) {

    const [cityList, updateCityList] = useState([]);
    const [cListView, updateCListView] = useState([]);

    
   
useEffect(()=>{    CityListService.GetCityList((list)=>{
        updateCityList(list);
        updateCListView(cList(cityList));
    });
},[cityList]);

    const cList = (ctyList)=>{
        return ctyList.map((city) => {
            console.log(city);
            
            return (<Col>
                <div className="pill pill-info">{ city.cityName }</div>
            </Col>)
        })
    }

    

    return (<Container>
        <Row>
            {cListView}
        </Row>
    </Container>);
  }
  
  export default CityList;
  
