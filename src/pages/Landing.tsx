import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { listCategory } from '../apiClient/services/category';
import { listStory } from '../apiClient/services/story';
import StoryItem from '../components/StoryItem';
import routes from '../constants/routes';
import Category from '../types/Category';
import Story from '../types/Story';


function Landing() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [stories, setStories] = useState<Story[]>([]);

    useMemo(() => {
        listCategory()
            .then(function (response) {
                setCategories(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        listStory()
            .then(function (response) {
                setStories(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const renderCategories = categories.map(({ id, slug, name }) => (
        <Link to={`${routes.CATEGORY}/${slug}`} key={id}>
            <span className="category-badge">{name}</span>
        </Link>
    ));

    const renderStories = stories.map((story) => (
        <StoryItem key={story.id} story={story} />
    ));

    return (
        <div className='page landing-page'>
            <div className='landing-grid'>
                <section className='story-feed'>
                    <p className='small-caps'>Stories</p>
                    {renderStories}
                </section>
                <aside className='category-list'>
                    <p className='small-caps'>
                        Discover more by category
                    </p>
                    <div className='categories'>
                        {renderCategories}
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default Landing;
