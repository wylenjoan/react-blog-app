export type Story = {
    id: number,
    author: {
        id: number,
        name: string,
    },
    category: {
        id: number,
        name: string,
    },
    title: string,
    slug: string,
    excerpt: string,
    body: string,
    created_at: string,
    updated_at: string,
};

export type StoryCreation = {
    category_id: number,
    slug: string,
    title: string,
    excerpt: string,
    body: string,
};

export default Story;
