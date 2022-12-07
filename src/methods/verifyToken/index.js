import { axios } from "services";
import { isSuccessRequest } from "utils";
import { endPoints } from "_constants";

const verifyToken = async (token) => {
    const userToken = token 

    if (userToken) {
        const data = await axios.get(endPoints.verifyToken, {
            params: {
                token: userToken
            }
        }).then((res) => res.data);

        if(isSuccessRequest(data)) {
            axios.defaults.headers.common['x-access-token'] = userToken;
        }

        return data;
    };

    return {
        code: 400,
        message: "userToken not found"
    }
}
export default verifyToken;