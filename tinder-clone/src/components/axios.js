import axios from 'axios';


const instance = axios.create({
    baseURL: "https://tinder-database.herokuapp.com"
})

export default instance