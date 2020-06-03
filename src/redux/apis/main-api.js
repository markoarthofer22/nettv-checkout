import axios from "axios";

const API = "https://sbb-shop.ea93.work/wp-json/wp/ea/";

export default axios.create({
    baseURL: API,
});
