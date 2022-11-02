import Icon from '@mdi/react';
import { mdiSpaceInvaders } from '@mdi/js';


function StoryItem() {
    return (
        <div className='story-item'>
            <div className='story-content'>
                <div className='flex align-center gap-half'>
                    <Icon
                        path={mdiSpaceInvaders}
                        size={1}
                    />
                    <span className='caption'>John F. Kennedy</span>
                </div>

                <div>
                    <h2 className='truncate item-title'>We choose to go to the moon and back 🌚</h2>
                    <p className='truncate item-excerpt'>
                        There is no strife, no prejudice, no national conflict in outer space as yet. Its hazards are hostile to us all. Its conquest deserves the best of all mankind, and its opportunity for peaceful cooperation many never come again.
                    </p>
                </div>

                <div className='flex align-center gap-half'>
                    <span className='caption'>Nov 2, 2022</span>
                    <span className='caption'>&#8226;</span>
                    <span className='category-pill'>Moon</span>
                </div>
            </div>
            <img src='https://spaceholder.cc/200x134' alt='spaceholder' className='story-image' />

        </div>
    );
}

export default StoryItem;
