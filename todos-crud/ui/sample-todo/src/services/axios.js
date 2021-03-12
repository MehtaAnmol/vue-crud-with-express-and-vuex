import Axios from "axios";

const http = Axios.create({
    baseURL: "http://localhost:3000/"
});

export default http;