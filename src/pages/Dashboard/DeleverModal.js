import React from 'react';

const DeleverModal = ({ selected, handleDeliver }) => {
    return (
        <div>
            <input type="checkbox" id="deliver-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Order Delivery!!!</h3>
                    <p class="py-4">Are you sure you want to shipped the order of {selected.quantity} units of {selected.product} to {selected.name}?</p>
                    <div class="modal-action">
                        <label onClick={handleDeliver} class="btn btn-sm btn-success">Deliver</label>
                        <label for="deliver-modal" class="btn btn-sm">Cancel</label>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default DeleverModal;