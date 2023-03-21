import Icon from '@mdi/react';
import { mdiSpaceInvaders } from '@mdi/js';
import Story from '../types/Story';
import formatReadableDate from '../utils/formatReadableDate';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';


interface Props {
    story: Story;
}

function StoryItem({ story }: Props) {
    const { slug, title, excerpt, created_at, author, category } = story;

    return (
        <Link to={`${routes.STORY}/${slug}`}>
            <div className='story-item'>
                <div className='story-content'>
                    <div className='flex items-center gap-2'>
                        <Icon
                            path={mdiSpaceInvaders}
                            size={1}
                        />
                        <span className='caption'>{author.name}</span>
                    </div>

                    <div>
                        <h2 className='item-title'>{title}</h2>
                        <p className='item-excerpt'>
                            {excerpt}
                        </p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <span className='caption'>{formatReadableDate(created_at)}</span>
                        <span className='caption'>&#8226;</span>
                        <span className='category-pill'>{category.name}</span>
                    </div>
                </div>
                <img src='https://spaceholder.cc/i/200/134' alt='spaceholder' className='item-image' />
            </div>
        </Link>
    );
}

export default StoryItem;
