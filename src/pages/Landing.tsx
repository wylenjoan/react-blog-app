import StoryItem from '../components/StoryItem';


function Landing() {
    return (
        <div className='page landing-page'>
            <div className='grid'>
                <section className='story-feed'>
                    <p className='overline'>Stories</p>
                    <StoryItem />
                    <StoryItem />
                </section>
                <aside className='category-list'>
                    <p className='overline'>
                        Discover more by category
                    </p>
                    <div className='categories'>
                        <span className="category-badge">Moon</span>
                        <span className="category-badge">Comet</span>
                        <span className="category-badge">Meteor</span>
                        <span className="category-badge">Star</span>
                        <span className="category-badge">Galaxy</span>
                        <span className="category-badge">Sun</span>
                        <span className="category-badge">Rock</span>
                        <span className="category-badge">Planet</span>
                        <span className="category-badge">Asteriod</span>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default Landing;
