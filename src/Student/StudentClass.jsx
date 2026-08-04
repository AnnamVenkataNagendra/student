

import axios from 'axios';

const API_URL ="http://localhost:8080/stu" 

class  StudentData {
  
    login(data){

        return axios.post(`${API_URL}/login`,data);

    }

    retrive(){
        return axios.get(`${API_URL}/fetch`);
    }
}

export default new StudentData();