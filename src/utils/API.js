import axios from "axios";

const API = axios.create({
  baseURL: "http://3.35.203.183:8080",
  //   headers: {
  // "Access-Control-Allow-Origin": `http://localhost:3000/`,
  // "Access-Control-Allow-Credentials": "true",
  //   },
});

export default API;
