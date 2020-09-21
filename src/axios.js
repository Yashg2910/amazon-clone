import axios from "axios";

const instance = axios.create({
    baseURL: 'https://amazon-clone-ycode.herokuapp.com/' // API URL (Cloud function)
});

export default instance;