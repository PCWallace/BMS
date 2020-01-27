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
                cb();
             } else {
                axios.post('http://127.0.0.1:8080/Auth', obj).then(response => {
                    
                    if (response.status === 200) {
                        this.isAuthenticated = true;
                        cb();
                    }
                }, error => {
                    this.isAuthenticated = true;
                    cb();
                }).catch(err => {

                })
            }
        }
    }

}


export default new Auth();

// this.history.push('/home');