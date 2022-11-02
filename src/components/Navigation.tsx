import Icon from '@mdi/react';
import { mdiMeteor } from '@mdi/js';


function Navigation() {
    return (
        <nav className='navigation'>
            <div className='nav-brand'>
                <Icon
                    path={mdiMeteor}
                    size={2}
                />
                <h2>Space Souvenirs</h2>
            </div>
            <div className='nav-links'>
                <a href='#'>Log In</a>
                <a href='#'>Create account</a>
            </div>
        </nav>
    );
}

export default Navigation;
