import React, { ChangeEvent } from 'react';

interface Props {
    type?: string,
    name: string,
    value: string,
    error?: string,
    required?: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

function InputTextGroup(props: Props) {
    const { type, name, value, error, required, onChange } = props;

    return (
        <div className='flex column mb-2'>
            <label
                className='caption capitalize'
                htmlFor={name}
            >
                {name}
            </label>

            <input
                type={type ?? "text"}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
            />

            <span className='error caption'>
                {error}
            </span>
        </div>
    );
}

export default InputTextGroup;
