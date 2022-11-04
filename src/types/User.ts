import Story from "./Story";

export type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    email_verified_at?: string,
    created_at: string,
    updated_at: string,
};

export type UserCreation = {
    name: string,
    username: string,
    email: string,
    password: string,
};

export type UserWithStories = {
    id: number,
    name: string,
    username: string,
    email: string,
    email_verified_at?: string,
    created_at: string,
    updated_at: string,
    stories: Story[],
};

export default User;
