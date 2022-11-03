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
    const [category, setCategory] = useState<CategoryWithStories>({
        id: 0,
        name: '',
        slug: '',
        created_at: '',
        updated_at: '',
        stories: [],
    });

    useMemo(() => {
        getCategoryWithStories(categorySlug)
            .then(function (response) {
                setCategory(response.data);

            })
            .catch(function (error) {
                console.log(error);
            });
    }, [categorySlug]);

    const renderStories = category.stories.map((story) => (
        <StoryItem key={story.id} story={story} />
    ));

    return (
        <div className='page category-page'>
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
    );
}

export default CategoryPage;
