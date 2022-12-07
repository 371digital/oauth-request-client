
import axios from "axios";
import { oauthApiIP } from "_constants";

const instance = axios.create({
    baseURL: oauthApiIP
});

instance.defaults.headers.common['x-access-token'] = "";

export default instance;