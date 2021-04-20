import axios from 'axios';

 const API = {
    getEmployees: function() {
        return axios.get('https://randomuser.me/api/?results=50&nat=au&exc=login,id')
    }
}

export default API;