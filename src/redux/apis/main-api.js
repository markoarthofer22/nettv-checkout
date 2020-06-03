import axios from "axios";

// const API = "https://nettvplus.com/oec/";
const TestAPI = "https://sbb-shop.ea93.work/wp-json/wp/ea/";

export default axios.create({
    baseURL: TestAPI,
});
