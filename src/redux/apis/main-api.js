import axios from "axios";

// const API = "https://nettvplus.com/oec/";
const TestAPI = "https://pp.nettvplus.com/wp-json/wp/ea/";

export default axios.create({
    baseURL: TestAPI,
});
