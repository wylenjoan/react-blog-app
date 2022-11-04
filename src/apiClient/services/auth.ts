import axiosClient from "..";
import { Credentials, UserCreation } from "../../types/User";

function registerUser(user: UserCreation) {
    return axiosClient.post('/register', user);
}

function loginUser(credentials: Credentials) {
    return axiosClient.post('/login', credentials);
}

export {
    registerUser,
    loginUser
};
