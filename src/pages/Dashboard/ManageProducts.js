import React, { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://obscure-wave-68553.herokuapp.com/products`).then(res => res.json()).then(data => setProducts(data));
    }, [products])

    return (
        <div className='m-5 p-5 shadow-2xl rounded-box'>
            <h2 className='text-3xl text-center mb-3'>All Products</h2>
            <div class="overflow-x-auto">
                <table class="table w-full text-center">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Stock(units)</th>
                            <th>Price($)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ManageProduct
                                index={index}
                                key={product._id}
                                product={product}
                            >
                            </ManageProduct>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;