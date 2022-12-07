import { axios } from "services";

const logout = async () => {
    axios.defaults.headers.common['x-access-token'] = "";
};

export default logout;