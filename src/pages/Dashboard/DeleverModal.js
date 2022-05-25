import React from 'react';

const DeleverModal = ({ selected, handleDeliver }) => {
    return (
        <div>
            <input type="checkbox" id="deliver-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Order Delivery!!!</h3>
                    <p className="py-4">Are you sure you want to shipped the order of {selected.quantity} units of {selected.product} to {selected.name}?</p>
                    <div className="modal-action">
                        <label onClick={handleDeliver} className="btn btn-sm btn-success">Deliver</label>
                        <label htmlFor="deliver-modal" className="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleverModal;