import Icon from '@mdi/react';
import { mdiMeteor } from '@mdi/js';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';


function LogoNav() {
    return (
        <nav>
            <Link to={routes.ROOT}>
                <div className='nav-brand'>
                    <Icon
                        path={mdiMeteor}
                        size={2}
                    />
                    <h2>Space Souvenirs</h2>
                </div>
            </Link>
        </nav>
    );
}

export default LogoNav;
