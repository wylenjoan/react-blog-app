import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { listCategory } from '../../apiClient/services/category';
import { getStoryBySlug, updateStory } from '../../apiClient/services/story';
import InputGroup from '../../components/InputGroup';
import SelectGroup from '../../components/SelectGroup';
import SubmitButton from '../../components/SubmitButton';
import TextareaGroup from '../../components/TextareaGroup';
import useToken from '../../hooks/useToken';
import Category from '../../types/Category';
import { StoryCreation } from '../../types/Story';
import formatSlug from '../../utils/formatSlug';

function UpdateStory() {
    const { storySlug } = useParams();

    const token = useToken();

    const emptyStory = {
        category_id: 0,
        title: '',
        slug: '',
        excerpt: '',
        body: '',
    };

    const [storyId, setStoryId] = useState<number>(0);
    const [categories, setCategories] = useState<Category[]>([]);
    const [story, setStory] = useState<StoryCreation>(emptyStory);
    const [error, setError] = useState({
        title: '',
        slug: '',
        excerpt: '',
        body: '',
    });
    const [successMessage, setSuccessMessage] = useState<string>('');


    useMemo(() => {
        listCategory()
            .then(function (response) {
                setCategories(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        getStoryBySlug(storySlug)
            .then(function (response) {
                setStoryId(response.data.id);
                setStory({
                    category_id: response.data.category.id,
                    title: response.data.title,
                    slug: response.data.slug,
                    excerpt: response.data.excerpt,
                    body: response.data.body,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [storySlug]);

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const {
            target: { name, value }
        } = event;

        setStory(prevState => ({
            ...prevState,
            [name]: value
        }));

        if (name === 'title') {
            setStory(prevState => ({
                ...prevState,
                slug: formatSlug(prevState.title)
            }));
        }

        if (name === 'category') {
            setStory(prevState => ({
                ...prevState,
                category_id: Number(value)
            }));
        }
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        updateStory(storyId, story, token)
            .then(function (response) {
                setSuccessMessage('Your story was successfully updated! ✨');
                setError({
                    title: '',
                    slug: '',
                    excerpt: '',
                    body: '',
                });
                setStory(emptyStory);
            })
            .catch(function (error) {
                setError(error.response?.data.errors);
            });
    }

    const renderSuccessMessage = successMessage && (
        <div className='success-alert mb-2'>
            {successMessage}
        </div>
    );

    return (
        <div className='page story-page'>
            <h1 className='text-center mb-1'> Update Story </h1>
            <form method="post" onSubmit={handleSubmit}>
                <InputGroup
                    name='title'
                    value={story.title}
                    error={error.title}
                    onChange={handleInputChange}
                    required
                />
                <InputGroup
                    name='slug'
                    value={story.slug}
                    error={error.slug}
                    onChange={handleInputChange}
                    required
                    disabled
                />
                <TextareaGroup
                    name='excerpt'
                    value={story.excerpt}
                    error={error.excerpt}
                    onChange={handleInputChange}
                    rows={3}
                    required
                />
                <TextareaGroup
                    name='body'
                    value={story.body}
                    error={error.body}
                    onChange={handleInputChange}
                    rows={10}
                    required
                />
                <SelectGroup
                    name='category'
                    values={categories}
                    selected_id={story.category_id}
                    onChange={handleInputChange}
                    required
                />

                {renderSuccessMessage}

                <SubmitButton />
            </form>
        </div>
    );
}

export default UpdateStory;
