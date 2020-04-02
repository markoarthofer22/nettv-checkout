import axios from "axios";

const API = "https://nettvplus.com/oec/";

export default axios.create({
  baseURL: API
});
