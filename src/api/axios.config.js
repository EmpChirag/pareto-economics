import axios from "axios";

export const baseURL = process.env.REACT_APP_API_BASE_URL;

const Api = axios.create({ baseURL });

Api.defaults.headers.post["Content-Type"] = "application/json";

export default Api;
