import React, { ChangeEvent } from 'react';
import Label from './Label';

interface Props {
    type?: string;
    name: string;
    value: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function InputGroup(props: Props) {
    const {
        type,
        name,
        value,
        error,
        required,
        disabled,
        onChange
    } = props;

    return (
        <div className='flex flex-col mb-2'>
            <Label name={name} />

            <input
                type={type ?? "text"}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
            />

            <span className='error caption'>
                {error}
            </span>
        </div>
    );
}

export default InputGroup;
