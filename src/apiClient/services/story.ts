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

function updateStory(storyId: number, story: StoryCreation, token: string) {
    return axiosClient.patch(`/stories/${storyId}`, story, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

function deleteStory(storyId: number, token: string) {
    return axiosClient.delete(`/stories/${storyId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

export {
    listStory,
    createStory,
    getStoryBySlug,
    updateStory,
    deleteStory,
};
