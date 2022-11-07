import axiosClient from "..";
import { StoryCreation } from "../../types/Story";

function listStory() {
    return axiosClient.get('/stories');
}

function createStory(story: StoryCreation, token: string) {
    return axiosClient.post('/stories', story, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

function getStoryBySlug(slug?: string) {
    return axiosClient.get(`/stories/slug/${slug}`);
}

export {
    listStory,
    createStory,
    getStoryBySlug,
};
