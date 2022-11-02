import axiosClient from "..";


function listStory() {
    return axiosClient.get('/stories');
}

export {
    listStory,
};
