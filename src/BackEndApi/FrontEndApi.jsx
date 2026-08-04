import React from 'react'

import axios from 'axios';

 const API_URL = "https://spring-6ko4.onrender.com/stu";

class BackendApi {

      login(data){

            return axios.post(`${API_URL}/login`,data);

        }

        retrive(){
            return axios.get(`${API_URL}/fetch`);
        }

        post(data){
            return axios.post(`${API_URL}/post`,data);
        }
 
}

export default new BackendApi();
