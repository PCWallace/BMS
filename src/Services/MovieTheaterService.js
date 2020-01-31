import React from 'react';
import axios from 'axios';


class MovieTheaterData{
    constructor() {
        this.state = {
            tmbcList:[]
        }

        this.GetTMBCList = (id , cb) => {
            
                let config = {
                    headers: {
                      "Content-Type": "application/json",
                      'Access-Control-Allow-Origin': '*',
                      'authorization': localStorage.getItem('authorization')
                    }
                  }
                axios.get(`http://10.71.150.141:8762/tmbc/${id}` ,config)
                .then(response => {
                    if (response.status === 200) {
                        console.log(response.data.details);
                        this.state.tmbcList = response.data.details;
                        cb(this.state.tmbcList);
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


export default new MovieTheaterData();
