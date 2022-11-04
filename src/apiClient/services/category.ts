import axiosClient from "..";


function listCategory() {
    return axiosClient.get('/categories');
}

function getCategoryWithStories(slug?: string) {
    return axiosClient.get(`/categories/slug/${slug}/stories`);
}

export {
    listCategory,
    getCategoryWithStories
};
