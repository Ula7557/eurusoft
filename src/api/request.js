import axios from "axios";

export const request = axios.create({
  baseURL: "https://api.eurosoft.uz/",
  headers: { "api-token": process.env.REACT_APP_API_TOKEN },
});