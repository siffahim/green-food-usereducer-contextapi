import React from 'react';
import { useProduct } from '../Context/ProductProvider';
import { actionTypes } from '../state/ProductState/actionTypes';

const ProductCard = ({ product }) => {
    const { name, price, img } = product;
    const { dispatch } = useProduct();

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} className='rounded-lg' alt="Shoes" /></figure>
            <div className="card-body">
                <div className='space-y-1'>
                    <h2 className="card-title">{name}</h2>
                    <p className='text-lg font-medium'>${price}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white" onClick={() => dispatch({ type: actionTypes.ADD_TO_CART, payload: product })}>ADD To Cart</button>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;