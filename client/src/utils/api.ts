import axios from "axios";

const api = axios.create({
    baseURL: "http://0.0.0.0/"
});

api.defaults.withCredentials = true;

export {api};