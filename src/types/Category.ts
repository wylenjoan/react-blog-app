import Story from "./Story";

export type Category = {
    id: number,
    name: string,
    slug: string,
    created_at: string,
    updated_at: string,
};

export type CategoryWithStories = {
    id: number,
    name: string,
    slug: string,
    created_at: string,
    updated_at: string,
    stories: Story[],
};

export default Category;
