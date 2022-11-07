import Icon from '@mdi/react';
import { mdiMeteor } from '@mdi/js';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import { useEffect, useState } from 'react';


function Navigation() {
    const token = localStorage.getItem('usertoken');
    const loggedInUser = localStorage.getItem('user');
    const [user, setUser] = useState({
        name: '',
        username: ''
    });

    useEffect(() => {
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
    }, [loggedInUser]);

    const renderNavLinks = token ? (
        <div className='nav-links'>
            <p>Hello, {user.name}!</p>
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
