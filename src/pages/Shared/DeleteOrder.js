import React from 'react';

const DeleteOrder = ({ selected, handleDelete }) => {
    return (
        <div>
            <input type="checkbox" id="delete-order" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Warning!!!</h3>
                    <p class="py-4">Are you sure you want to remove the order of {selected.quantity} units of {selected.product}?</p>
                    <div class="modal-action">
                        <label onClick={handleDelete} class="btn btn-sm btn-error">Delete</label>
                        <label for="delete-order" class="btn btn-sm">Cancel</label>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default DeleteOrder;