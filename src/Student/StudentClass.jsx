

import axios from 'axios';

const API_URL ="https://spring-eo0l.onrender.com/stu" 

class  StudentData {
  
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

export default new StudentData();