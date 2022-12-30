import React from 'react';
import { CiBookmarkRemove } from 'react-icons/ci';
import { useProduct } from '../Context/ProductProvider';
import { actionTypes } from '../state/ProductState/actionTypes';

const ProductCart = ({ product }) => {
    const { price, img, name, _id } = product;
    const { dispatch } = useProduct()
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} className='rounded-lg' alt="Shoes" /></figure>
            <div className="card-body">
                <div className='space-y-1'>
                    <h2 className="card-title">{name}</h2>
                    <p className='text-lg font-medium'>${price}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white" >ADD To Cart</button>
                    <button className="btn btn-primary text-white" onClick={() => dispatch({ type: actionTypes.REMOVE_TO_CART, payload: _id })} >
                        <CiBookmarkRemove className='w-6 h-6' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;