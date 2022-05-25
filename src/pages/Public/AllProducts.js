import React, { useEffect, useState } from 'react';
import Product from '../Home/Product';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://obscure-wave-68553.herokuapp.com/products').then(res => res.json()).then(data => setProducts(data))
    }, [products])
    return (
        <div className='my-16'>
            <h2 className='text-primary text-center text-4xl uppercase'>Our All Products</h2>
            <div className="divider px-10"></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10'>
                {
                    products?.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;