import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mdiShape } from '@mdi/js';
import Icon from '@mdi/react';
import { CategoryWithStories } from '../types/Category';
import { getCategoryWithStories } from '../apiClient/services/category';
import StoryItem from '../components/StoryItem';
import EmptyState from '../components/EmptyState';



function CategoryPage() {
    let { categorySlug } = useParams();
    const [category, setCategory] = useState<CategoryWithStories>();

    const [message, setMessage] = useState<string>('');


    useMemo(() => {
        getCategoryWithStories(categorySlug)
            .then(function (response) {
                setCategory(response.data);
                if (response.data.stories.length === 0) {
                    setMessage('There are no stories in this category yet. You may be the first one to write! 🚀');
                }
            })
            .catch(function (error) {
                setMessage('We didn\'t find the category you\'re looking for.');
            });
    }, [categorySlug]);

    const renderStories = category?.stories.length ? (
        category.stories.map((story) => (
            <StoryItem key={story.id} story={story} />
        ))
    ) : (
        <EmptyState>
            <p>{message}</p>
        </EmptyState>
    );

    const renderCategory = category ? (
        <div>
            <div className='flex align-center gap-1 mb-1'>
                <Icon
                    path={mdiShape}
                    size='1.75rem'
                    horizontal
                />
                <h1 className='capitalize'>{categorySlug}</h1>
            </div>
            <hr />
            <div className='mt-1'>
                {renderStories}
            </div>

        </div>
    ) : (
        <EmptyState>
            <div className='flex align-center justify-center gap-half'>
                <Icon
                    path={mdiShape}
                    size='2rem'
                    horizontal
                />
                <p>{message}</p>
            </div>
        </EmptyState>
    );

    return (
        <div className='page category-page'>
            {renderCategory}
        </div>
    );
}

export default CategoryPage;
