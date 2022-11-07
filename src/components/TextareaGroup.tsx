import React, { ChangeEvent } from 'react';
import Label from './Label';

interface Props {
    name: string,
    value: string,
    error?: string,
    rows?: number,
    required?: boolean;
    disabled?: boolean;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void,
}

function TextareaGroup(props: Props) {
    const {
        name,
        value,
        error,
        rows,
        required,
        disabled,
        onChange
    } = props;

    return (
        <div className='flex column mb-2'>
            <Label name={name} />

            <textarea
                name={name}
                value={value}
                onChange={onChange}
                rows={rows}
                required={required}
                disabled={disabled}
            />

            <span className='error caption'>
                {error}
            </span>
        </div>
    );
}

export default TextareaGroup;
