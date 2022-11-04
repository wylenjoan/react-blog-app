import Icon from '@mdi/react';
import { mdiSpaceInvaders } from '@mdi/js';
import { useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { getStoryBySlug } from '../apiClient/services/story';
import Story from '../types/Story';
import formatReadableDate from '../utils/formatReadableDate';
import EmptyState from '../components/EmptyState';


function StoryPage() {
    let { storySlug } = useParams();
    const [story, setStory] = useState<Story>({
        id: 0,
        author: {
            id: 0,
            name: '',
        },
        category: {
            id: 0,
            name: '',
        },
        title: '',
        slug: '',
        excerpt: '',
        body: '',
        created_at: '',
        updated_at: '',
    });

    const [message, setMessage] = useState<string>('');

    useMemo(() => {
        getStoryBySlug(storySlug)
            .then(function (response) {
                setStory(response.data);
            })
            .catch(function (error) {
                setMessage('The story you\'re looking hasn\'t been written yet. Maybe you\'re the one who\'s gonna write it? 🤔');
            });
    }, [storySlug]);

    const renderStory = story.id ? (
        <div>
            <div className='flex align-center gap-half'>
                <Icon
                    path={mdiSpaceInvaders}
                    size={1}
                />
                <span className='caption'>By {story.author.name}</span>
                <span className='caption'>&#8226;</span>
                <span className='caption'>{formatReadableDate(story.created_at)}</span>
                <span className='caption'>&#8226;</span>
                <span className='category-pill'>{story.category.name}</span>
            </div>
            <h1 className='story-title'>
                {story.title}
            </h1>
            <p className='story-excerpt'>
                {story.excerpt}
            </p>
            <img src='https://spaceholder.cc/800x500' alt='spaceholder' className='story-image' />
            <div className='story-body'>
                {story.body}
            </div>
        </div>
    ) : (
        <EmptyState>
            <p>{message}</p>
        </EmptyState>
    );

    return (
        <div className='page story-page'>
            {renderStory}
        </div>
    );
}

export default StoryPage;
