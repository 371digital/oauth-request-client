import { axios } from "services";
import { endPoints } from "_constants";

const getUserData = async () => {
    const data = await axios.get(endPoints.getProfile).then((res) => res.data);
    return data;
};

export default getUserData;