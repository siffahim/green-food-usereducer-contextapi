import React from 'react';
import ProductCart from '../components/ProductCart';
import { useProduct } from '../Context/ProductProvider';

const Cart = () => {
    const { state: { cart, loading, error } } = useProduct()

    let content;

    if (loading) {
        content = <p>Loading...</p>
    }

    if (error) {
        content = <p>Something went wrong</p>
    }

    if (!loading && !error && cart.length === 0) {
        content = <p>Nothing to show ,The list empty</p>
    }

    if (!loading && !error && cart.length) {
        content = cart.map(product =>
            <ProductCart key={product._id}
                product={product}
            />)
    }

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto my-8 gap-4'>
                {content}
            </div>

        </>
    );
};

export default Cart;