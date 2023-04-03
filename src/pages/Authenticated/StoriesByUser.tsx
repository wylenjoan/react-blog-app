import React, { useMemo, useState } from 'react';
import useLoggedInUser from '../../hooks/useLoggedInUser';
import { UserWithStories } from '../../types/User';
import { getUserWithStories } from '../../apiClient/services/user';
import formatReadableDate from '../../utils/formatReadableDate';
import { deleteStory } from '../../apiClient/services/story';
import useToken from '../../hooks/useToken';
import { Link, useNavigate } from 'react-router-dom';
import routes from '../../constants/routes';
import EmptyState from '../../components/EmptyState';
import DeleteModal from '../../components/DeleteModal';


function StoriesByUser() {
    const user = useLoggedInUser();
    const token = useToken();

    const navigate = useNavigate();

    const [message, setMessage] = useState<string>('');
    const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
    const [selectedStoryId, setSelectedStoryId] = useState<number>(0);
    const [viewedUser, setViewedUser] = useState<UserWithStories>({
        id: 0,
        name: '',
        username: '',
        email: '',
        created_at: '',
        updated_at: '',
        stories: [],
    });

    useMemo(() => {
        getUserWithStories(user?.username)
            .then(function (response) {
                setViewedUser(response.data);
                if (response.data.stories.length < 2) {
                    setMessage('You haven\'t written a story yet. Share your stories now ✨');
                }
            })
            .catch(function (error) {
                setMessage('We didn\'t find a space traveller with that username');
            });
    }, [user?.username]);

    function handleNavigateUpdatePage(storySlug: string) {
        navigate(`${routes.MY_STORIES}/${storySlug}`);
    }

    function handleDeleteStory(storyId: number) {
        deleteStory(storyId, token)
            .then(function (response) {
                window.location.reload();
                handleToggleModal(false);

            })
            .catch(function (error) {
                console.log(error);
            });
    };

    function handleToggleModal(modalState: boolean) {
        setDeleteModalOpen(modalState);
    }

    const renderStories = viewedUser.stories.length ? (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Date created</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {viewedUser.stories.map((story) => (
                    <tr className='data' key={story.id}>
                        <td>
                            {story.title}
                        </td>
                        <td>
                            <span className='category-pill'>{story.category.name}</span>
                        </td>
                        <td>{formatReadableDate(story.created_at)}</td>
                        <td>
                            <Link to={`${routes.STORY}/${story.slug}`}>
                                <button className='btn-small btn-gray  mr-1'>
                                    View
                                </button>
                            </Link>
                            <button
                                className='btn-small btn-blue mr-1'
                                onClick={() => handleNavigateUpdatePage(story.slug)}
                            >
                                Edit
                            </button>
                            <button
                                type='button'
                                onClick={() => {
                                    handleToggleModal(true);
                                    setSelectedStoryId(story.id);
                                }}
                                className='btn-small btn-red mr-1'
                            >
                                Delete
                            </button>
                        </td>
                    </tr>

                ))}
            </tbody>
        </table >

    ) : (
        <EmptyState>
            <p>{message}</p>
        </EmptyState>
    );

    const renderDeleteModal = isDeleteModalOpen && (
        <DeleteModal showModal={handleToggleModal} handleDelete={() => handleDeleteStory(selectedStoryId)} />
    );

    return (
        <div className='page story-page'>
            <h1 className='text-center mb-1'>My Stories </h1>
            {renderStories}

            {renderDeleteModal}

        </div>
    );
}

export default StoriesByUser;
