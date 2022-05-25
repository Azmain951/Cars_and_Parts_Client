import React from 'react';

const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const name = e.target.product.value;
        const description = e.target.description.value;
        const price = parseInt(e.target.price.value);
        const stock = parseInt(e.target.stock.value);
        const min = parseInt(e.target.min.value);
        const img = e.target.img.value;

        const newProduct = {
            name,
            description,
            price,
            stock,
            min,
            img
        }

        fetch(`https://obscure-wave-68553.herokuapp.com/products`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        e.target.reset();
    }

    return (
        <div className='my-5'>
            <form onSubmit={handleAddProduct} className='w-1/2 mx-auto p-10 shadow-2xl rounded'>
                <h2 className='text-3xl text-center'>Add a product</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" placeholder='Product Name' name='product' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Description</span>
                    </label>
                    <textarea type="text" placeholder='Product Name' name='description' className="textarea textarea-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price($ per unit)</span>
                    </label>
                    <input type="text" placeholder='Product Price per unit($)' name='price' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Stock</span>
                    </label>
                    <input type="number" placeholder='Stock Quantity' name='stock' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Minimum Order Quantity</span>
                    </label>
                    <input type="number" placeholder='Minimum Order Quantity' name='min' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Image</span>
                    </label>
                    <input type="text" placeholder='Product Image Link' name='img' className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <input type='submit' className="btn btn-primary text-white" value='Add Product' />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;