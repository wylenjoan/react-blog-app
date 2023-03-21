import React, { ChangeEvent } from 'react';
import Label from './Label';

interface Props {
    name: string;
    values: any[];
    error?: string;
    selected_id?: number;
    required?: boolean;
    disabled?: boolean;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

function SelectGroup(props: Props) {
    const {
        name,
        values,
        error,
        selected_id,
        required,
        disabled,
        onChange
    } = props;

    return (
        <div className='flex flex-col mb-2'>
            <Label name={name} />
            <select
                name={name}
                required={required}
                disabled={disabled}
                onChange={onChange}
            >
                {values.map(({ id, name }) => (
                    <option key={id} value={id} selected={selected_id === id}>{name}</option>
                ))}
            </select>
            <span className='error caption'>
                {error}
            </span>
        </div>
    );
}

export default SelectGroup;
