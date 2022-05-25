import React from 'react';

const DeleteOrder = ({ selected, handleDelete }) => {
    return (
        <div>
            <input type="checkbox" id="delete-order" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Warning!!!</h3>
                    <p className="py-4">Are you sure you want to remove the order of {selected.quantity} units of {selected.product}?</p>
                    <div className="modal-action">
                        <label onClick={handleDelete} className="btn btn-sm btn-error">Delete</label>
                        <label htmlFor="delete-order" className="btn btn-sm">Cancel</label>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default DeleteOrder;