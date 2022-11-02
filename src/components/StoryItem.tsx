import Icon from '@mdi/react';
import { mdiSpaceInvaders } from '@mdi/js';
import Story from '../types/Story';
import formatReadableDate from '../utils/formatReadableDate';


interface Props {
    story: Story;
}

function StoryItem({ story }: Props) {
    const { title, excerpt, created_at, author, category } = story;

    return (
        <div className='story-item'>
            <div className='story-content'>
                <div className='flex align-center gap-half'>
                    <Icon
                        path={mdiSpaceInvaders}
                        size={1}
                    />
                    <span className='caption'>{author.name}</span>
                </div>

                <div>
                    <h2 className='truncate item-title'>{title}</h2>
                    <p className='truncate item-excerpt'>
                        {excerpt}
                    </p>
                </div>

                <div className='flex align-center gap-half'>
                    <span className='caption'>{formatReadableDate(created_at)}</span>
                    <span className='caption'>&#8226;</span>
                    <span className='category-pill'>{category.name}</span>
                </div>
            </div>
            <img src='https://spaceholder.cc/200x134' alt='spaceholder' className='item-image' />

        </div>
    );
}

export default StoryItem;
