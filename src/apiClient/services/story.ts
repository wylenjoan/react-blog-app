import axiosClient from "..";


function listStory() {
    return axiosClient.get('/stories');
}

function getStoryBySlug(slug?: string) {
    return axiosClient.get(`/stories/slug/${slug}`);
}

export {
    listStory,
    getStoryBySlug,
};
