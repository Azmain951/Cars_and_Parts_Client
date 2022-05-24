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

        console.log(newProduct);
        fetch(`http://localhost:5000/products`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
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
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Product Name</span>
                    </label>
                    <input type="text" placeholder='Product Name' name='product' class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Product Description</span>
                    </label>
                    <textarea type="text" placeholder='Product Name' name='description' class="textarea textarea-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Price($ per unit)</span>
                    </label>
                    <input type="text" placeholder='Product Price per unit($)' name='price' class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Available Stock</span>
                    </label>
                    <input type="number" placeholder='Stock Quantity' name='stock' class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Minimum Order Quantity</span>
                    </label>
                    <input type="number" placeholder='Minimum Order Quantity' name='min' class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Product Image</span>
                    </label>
                    <input type="text" placeholder='Product Image Link' name='img' class="input input-bordered" />
                </div>
                <div class="form-control mt-6">
                    <input type='submit' class="btn btn-primary text-white" value='Add Product' />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;