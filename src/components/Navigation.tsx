import Icon from '@mdi/react';
import { mdiMeteor } from '@mdi/js';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';


function Navigation() {
    return (
        <nav className='navigation'>
            <Link to={routes.ROOT}>
                <div className='nav-brand'>
                    <Icon
                        path={mdiMeteor}
                        size={2}
                    />
                    <h2>Space Souvenirs</h2>
                </div>
            </Link>

            <div className='nav-links'>
                <Link to={routes.LOGIN}>
                    <span className='nav-link'>
                        Login
                    </span>
                </Link>
                <Link to={routes.REGISTER}>
                    <span className='nav-link'>
                        Create account
                    </span>
                </Link>
            </div>
        </nav>
    );
}

export default Navigation;
