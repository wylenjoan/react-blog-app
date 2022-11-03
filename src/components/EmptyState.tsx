import React from 'react';


interface Props {
    children: JSX.Element[],
}

function EmptyState({ children }: Props) {
    return (
        <div className='empty-state'> {children}</div>
    );
}

export default EmptyState;
