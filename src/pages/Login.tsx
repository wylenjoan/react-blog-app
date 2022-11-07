import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../apiClient/services/auth';
import InputGroup from '../components/InputGroup';
import LogoNav from '../components/LogoNav';
import SubmitButton from '../components/SubmitButton';
import routes from '../constants/routes';
import { Credentials } from '../types/User';

function Login() {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState<Credentials>({
        email: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState<string>('');

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {
            target: { name, value }
        } = event;

        setCredentials(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        loginUser(credentials)
            .then(function (response) {
                localStorage.setItem('usertoken', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                navigate(routes.ROOT);
            })
            .catch(function (error) {
                if (error.response.status === 422) {
                    setErrorMessage(error.response.data.errors.password);
                } else {
                    setErrorMessage(error.response.data.message);
                }
            });
    }

    const renderErrorMessage = errorMessage && (
        <div className='error-alert mb-2'>
            {errorMessage}
        </div>
    );

    return (
        <div>
            <LogoNav />
            <div className='page form-page'>
                <h1 className='text-center mb-1'>Log in</h1>
                <form method="post" onSubmit={handleSubmit}>
                    <InputGroup
                        name='email'
                        type='email'
                        value={credentials.email}
                        onChange={handleInputChange}
                        required
                    />
                    <InputGroup
                        name='password'
                        type='password'
                        value={credentials.password}
                        onChange={handleInputChange}
                        required
                    />

                    {renderErrorMessage}

                    <SubmitButton />
                </form>
            </div>
        </div>
    );
}

export default Login;
