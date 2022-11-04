import axiosClient from "..";


function getUserWithStories(username?: string) {
    return axiosClient.get(`/users/username/${username}/stories`);
}

export {
    getUserWithStories
};
