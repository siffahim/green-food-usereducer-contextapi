import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Model from '../../components/Model';
import { useProduct } from '../../Context/ProductProvider';

const Navbar = () => {
    const { state: { cart } } = useProduct()
    const navigate = useNavigate()
    const [promo, setPromo] = useState();


    const menuItems = <>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/top-rated">Top Rated</Link></li>
        <li><Link to="/about">About</Link></li>
    </>

    let delivery = 4;
    let subTotal = 0;

    for (const item of cart) {
        subTotal += item.price
    }

    let totalPrice = delivery + subTotal;



    const handlePromo = () => {
        if (promo.toLowerCase() === 'sif') {
            const discountAmount = (totalPrice * 15) / 100;
            const finalPrice = totalPrice - discountAmount;
            totalPrice = finalPrice;
            console.log(totalPrice)
        } else {
            const price = delivery + subTotal;
            totalPrice = price
            console.log(totalPrice)
        }
    }

    return (
        <div>
            <div className="navbar bg-green-100 max-w-7xl m-2 mx-auto rounded-full text-green-500">
                <div className="flex-1">
                    <NavLink className="btn btn-ghost normal-case text-xl font-bold" to='/' >Green Food</NavLink>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item bg-green-500 rounded-full outline-none">{cart.length}</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body p-">
                                <span className="text-green-500 font-medium">Delivery: ${delivery}</span>
                                <span className="text-green-500 font-medium">Subtotal: ${subTotal}</span>
                                <div>
                                    <input type="text" name="" id="" className='border py-1 rounded px-1 outline-none focus:border-green-500' placeholder='Enter Promo Code' onBlur={e => setPromo(e.target.value)} />
                                    <button className='bg-primary text-white rounded px-2 py-1  my-1' onClick={handlePromo}>Apply</button>
                                    <label htmlFor="promo_model" className="ml-1">Get Promo Code</label>
                                </div>
                                <span className="text-green-500 font-medium">Total: ${totalPrice}</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block text-white" onClick={() => { navigate("/cart") }}>View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Model />
        </div>
    );
};

export default Navbar;