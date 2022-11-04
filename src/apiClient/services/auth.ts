import axiosClient from "..";
import { UserCreation } from "../../types/User";

function registerUser(user: UserCreation) {
    return axiosClient.post('/register', user);
}

export {
    registerUser,
};
