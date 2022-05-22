import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch('parts.json').then(res => res.json()).then(data => setProducts(data))
    }, [])
    return (
        <div className='my-16'>
            <h2 className='text-primary text-center text-5xl mb-10 uppercase'>Our Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10'>

                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;