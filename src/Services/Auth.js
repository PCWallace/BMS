import React from 'react';
import axios from 'axios';


class Auth extends React.Component {
    constructor(props) {
        super(props)
        this.isAuthenticated = false;
        this.state = {

        }

        this.Authenticate = (obj, cb) => {
            if (this.isAuthenticated) {
                cb('');
             } else {
              
                let config = {
                    headers: {
                      "Content-Type": "application/json",
                      'Access-Control-Allow-Origin': '*',
                    }
                  }
                axios.post('http://10.71.150.141:8762/auth', obj ,config).then(response => {
                    if (response.status === 200) {
                        this.isAuthenticated = true;
                        localStorage.setItem('authorization',response.headers.authorization);
                        cb('');
                    }else{
                        cb('Invalid Credentials');
                    }
                }, error => {
                    console.log(error)
                    cb('server error, Please try again!');
                }).catch(err => {
                    cb('Something went wrong');
                })
            }
        }
    }

}


export default new Auth();
