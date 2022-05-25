import React from 'react';

const DeleteModal = ({ selected, handleDelete }) => {
    return (
        <div>
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Delete Confirmation!!!</h3>
                    <p class="py-4">Are you sure you want to remove {selected.name}?</p>
                    <div class="modal-action">
                        <label onClick={handleDelete} class="btn btn-sm btn-error">Delete</label>
                        <label for="delete-modal" class="btn btn-sm">Cancel</label>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default DeleteModal;