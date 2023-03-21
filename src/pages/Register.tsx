import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../apiClient/services/auth';
import InputGroup from '../components/InputGroup';
import LogoNav from '../components/LogoNav';
import SubmitButton from '../components/SubmitButton';
import routes from '../constants/routes';
import { UserCreation } from '../types/User';

function Register() {
    const navigate = useNavigate();

    const [user, setUser] = useState<UserCreation>({
        name: '',
        username: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState<UserCreation>({
        name: '',
        username: '',
        email: '',
        password: '',
    });

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {
            target: { name, value }
        } = event;

        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        registerUser(user)
            .then(function (response) {
                localStorage.setItem('usertoken', response.data.token); localStorage.setItem('user', JSON.stringify(response.data.user));
                localStorage.setItem('user', JSON.stringify(response.data.user));
                navigate(routes.ROOT);
            })
            .catch(function (error) {
                setError(error.response?.data.errors);
            });
    }

    return (
        <div>
            <LogoNav />
            <div className='page form-page'>
                <h1 className='text-center mb-1'>Create an account</h1>
                <form method="post" onSubmit={handleSubmit}>
                    <InputGroup
                        name='name'
                        value={user.name}
                        error={error.name}
                        onChange={handleInputChange}
                        required
                    />
                    <InputGroup
                        name='username'
                        value={user.username}
                        error={error.username}
                        onChange={handleInputChange}
                        required
                    />
                    <InputGroup
                        name='email'
                        type='email'
                        value={user.email}
                        error={error.email}
                        onChange={handleInputChange}
                        required
                    />
                    <InputGroup
                        name='password'
                        type='password'
                        value={user.password}
                        error={error.password}
                        onChange={handleInputChange}
                        required
                    />

                    <div className='w-full flex items-center justify-between'>
                        <Link to={routes.LOGIN}>
                            <span className='link'>Log into account</span>
                        </Link >
                        <SubmitButton text='Register' />
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Register;
