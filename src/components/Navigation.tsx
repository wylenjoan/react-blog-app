import Icon from '@mdi/react';
import { mdiMeteor } from '@mdi/js';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import useLoggedInUser from '../hooks/useLoggedInUser';


function Navigation() {
    const token = localStorage.getItem('usertoken');
    const user = useLoggedInUser();

    const renderNavLinks = token ? (
        <div className='nav-links'>
            <span className='nav-greeting'>Hello, {user?.name}!</span>
        </div>
    ) : (
        <div className='nav-links'>
            <Link to={routes.LOGIN}>
                <span className='nav-link'>
                    Login
                </span>
            </Link >
            <Link to={routes.REGISTER}>
                <span className='nav-link'>
                    Create account
                </span>
            </Link>
        </div>
    );

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

            {renderNavLinks}
        </nav>
    );
}

export default Navigation;
