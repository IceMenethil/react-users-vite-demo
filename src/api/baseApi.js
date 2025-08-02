import axios from "axios";
import endpoints from "../config/endpoints";

const api = axios.create({
  baseURL:
    import.meta.env.REACT_APP_API_BASE_URL ||
    "https://jsonplaceholder.typicode.com",
  headers: { "Content-type": "application/json; charset=UTF-8" },
});

export class BaseApi {
    api = api;
    endpoints = endpoints
}