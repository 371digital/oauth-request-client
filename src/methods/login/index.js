import { axios } from "services";
import { endPoints } from "_constants";

const login = async (mail, password) => {
    const data = await axios.post(endPoints.login, {
        password,
        mail
    }).then((res) => res.data);

    return data;
}

export default login;
