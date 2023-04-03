import React from 'react';
import CloseIcon from './icons/CloseIcon';
import WarningIcon from './icons/WarningIcon';

interface Props {
    showModal: (modalState: boolean) => void;
    handleDelete: () => void;
}

function DeleteModal(props: Props) {
    const { showModal, handleDelete } = props;

    return (
        <div className="fixed z-50 overflow-x-hidden overflow-y-auto md:inset-0  bg-dark-gray/50 flex items-center justify-center">
            <div className="relative bg-white rounded-md shadow">
                <button type="button" onClick={() => showModal(false)}
                    className="absolute top-3 right-2.5 text-dark-gray bg-transparent hover:bg-light-gray !p-1.5 inline-flex items-center">
                    <CloseIcon />
                </button>
                <div className="p-6 text-center">
                    <div className='mx-auto mb-4 w-14 h-14 text-dark-gray'>
                        <WarningIcon />
                    </div>
                    <h4 className="mb-5 text-lg font-normal text-dark-gray">Are you sure you want to delete this story?</h4>
                    <div className="flex justify-center gap-2">
                        <button type="button" onClick={handleDelete}
                            className="btn-red">
                            Yes
                        </button>
                        <button type="button" onClick={() => showModal(false)}
                            className="btn-gray-ghost">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;
