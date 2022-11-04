import React, { useState } from 'react';
import { registerUser } from '../apiClient/services/auth';
import InputTextGroup from '../components/InputTextGroup';
import LogoNav from '../components/LogoNav';
import { UserCreation } from '../types/User';

function Register() {
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
                localStorage.setItem('usertoken', response.data.token);
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
                    <InputTextGroup
                        name='name'
                        value={user.name}
                        error={error.name}
                        onChange={handleInputChange}
                        required
                    />
                    <InputTextGroup
                        name='username'
                        value={user.username}
                        error={error.username}
                        onChange={handleInputChange}
                        required
                    />
                    <InputTextGroup
                        name='email'
                        type='email'
                        value={user.email}
                        error={error.email}
                        onChange={handleInputChange}
                        required
                    />
                    <InputTextGroup
                        name='password'
                        type='password'
                        value={user.password}
                        error={error.password}
                        onChange={handleInputChange}
                        required
                    />

                    <button type='submit' className='float-right'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
