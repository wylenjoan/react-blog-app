import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mdiClipboardAccount } from '@mdi/js';
import Icon from '@mdi/react';
import StoryItem from '../components/StoryItem';
import EmptyState from '../components/EmptyState';
import { UserWithStories } from '../types/User';
import { getUserWithStories } from '../apiClient/services/user';



function UserPage() {
    let { username } = useParams();
    const [viewedUser, setViewedUser] = useState<UserWithStories>({
        id: 0,
        name: '',
        username: '',
        email: '',
        created_at: '',
        updated_at: '',
        stories: [],
    });

    const [message, setMessage] = useState<string>('');

    useMemo(() => {
        getUserWithStories(username)
            .then(function (response) {
                setViewedUser(response.data);
                if (response.data.stories.length < 2) {
                    setMessage('This space traveller hasn\'t written a story yet. 🌌');
                }
            })
            .catch(function (error) {
                setMessage('We didn\'t find a space traveller with that username');
            });
    }, [username]);

    const renderStories = viewedUser.stories.length ? (
        viewedUser.stories.map((story) => (
            <StoryItem key={story.id} story={story} />
        ))
    ) : (
        <EmptyState>
            <p>{message}</p>
        </EmptyState>
    );

    const renderViewedUser = viewedUser.id ? (
        <div>
            <div className='flex align-center gap-1 mb-1'>
                <Icon
                    path={mdiClipboardAccount}
                    size='1.75rem'
                    horizontal
                />
                <h1 className='capitalize'>{viewedUser.name}</h1>
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
                    path={mdiClipboardAccount}
                    size='2rem'
                    horizontal
                />
                <p>{message}</p>
            </div>
        </EmptyState>
    );

    return (
        <div className='page category-page'>
            {renderViewedUser}
        </div>
    );
}

export default UserPage;
