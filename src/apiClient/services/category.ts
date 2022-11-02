import axiosClient from "..";


function listCategory() {
    return axiosClient.get('/categories');
}

export {
    listCategory,
};
