import axios from "axios";

export const Api = axios.create({
  baseURL: "https://portfolio-backend-lucio.herokuapp.com/",
  responseType: "json",
});
