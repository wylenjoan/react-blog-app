import React from 'react';

interface Props {
    text?: string;
}

function SubmitButton(props: Props) {
    const { text } = props;
    return (
        <button type='submit' className='float-right'>
            {text ?? 'Submit'}
        </button>
    );
}

export default SubmitButton;
