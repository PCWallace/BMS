import React from 'react';
import axios from 'axios';


class CityData{
    constructor() {
        this.state = {
            CityList:[]
        }

        this.GetCityList = (cb) => {
            
                let config = {
                    headers: {
                      "Content-Type": "application/json",
                      'Access-Control-Allow-Origin': '*',
                      'authorization': localStorage.getItem('authorization')
                    }
                  }
                axios.get('http://10.71.150.141:8762/cities/All' ,config)
                .then(response => {
                    if (response.status === 200) {
                        console.log(response.data.details);
                        this.state.CityList = response.data.details;
                        console.log(this.state.CityList);
                        cb(this.state.CityList);
                    }else{
                        console.log(response);
                    }
                }, error => {
                    console.log(error)
                }).catch(err => {
                    console.log(err)
                })
            
        }
    }

}


export default new CityData();
