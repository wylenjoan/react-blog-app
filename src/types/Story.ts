type Story = {
    id: number,
    user_id: number,
    category_id: number,
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

export default Story;
