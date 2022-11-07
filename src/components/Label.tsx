import React from 'react';

interface Props {
    name: string;
}

function Label({ name }: Props) {
    return (
        <label
            className='caption capitalize'
            htmlFor={name}
        >
            {name}
        </label>
    );
}

export default Label;
