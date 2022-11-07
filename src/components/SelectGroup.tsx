import React, { ChangeEvent } from 'react';
import Label from './Label';

interface Props {
    name: string,
    values: any[],
    error?: string,
    required?: boolean;
    disabled?: boolean;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void,

}

function SelectGroup(props: Props) {
    const {
        name,
        values,
        error,
        required,
        disabled,
        onChange
    } = props;

    return (
        <div className='flex column mb-2'>
            <Label name={name} />
            <select
                name={name}
                required={required}
                disabled={disabled}
                onChange={onChange}
            >
                {values.map(({ id, name }) => (
                    <option key={id} value={id}>{name}</option>
                ))}
            </select>
            <span className='error caption'>
                {error}
            </span>
        </div>
    );
}

export default SelectGroup;
