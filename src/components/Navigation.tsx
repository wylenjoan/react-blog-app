import Icon from '@mdi/react';
import { mdiMeteor } from '@mdi/js';
import { Link, useNavigate } from 'react-router-dom';
import routes from '../constants/routes';
import useLoggedInUser from '../hooks/useLoggedInUser';
import useToken from '../hooks/useToken';
import { logoutUser } from '../apiClient/services/auth';


function Navigation() {
    const navigate = useNavigate();
    const token = useToken();
    const user = useLoggedInUser();

    function handleLogoutUser() {
        logoutUser(token)
            .then(function (response) {
                localStorage.removeItem('usertoken');
                localStorage.removeItem('user');
                navigate(routes.ROOT);
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const renderNavLinks = token ? (
        <div className='nav-links'>
            <Link to={routes.MY_STORIES}>
                <span className='nav-link'>
                    My Stories
                </span>
            </Link >
            <Link to={routes.CREATE_STORY}>
                <span className='nav-link'>
                    Create story
                </span>
            </Link >
            <span className='nav-greeting'>{`Hello, ${user?.name}!`}</span>
            <button
                className='small'
                onClick={handleLogoutUser}
            >
                Logout
            </button>
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
