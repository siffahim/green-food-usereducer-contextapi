import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { actionTypes } from '../state/ProductState/actionTypes';
import { initialProductState, productReducer } from '../state/ProductState/productReducer';

export const PRODUCT_CONTEXT = createContext()

const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialProductState)
    useEffect(() => {
        dispatch({ type: actionTypes.FETCHING_START })
        fetch("https://organic-food-server.onrender.com/courses")
            .then(res => res.json())
            .then(data => dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data.result }))
            .catch(() => {
                dispatch({ type: actionTypes.FETCHING_ERROR })
            })
    }, [])

    const value = {
        state,
        dispatch
    }
    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export default ProductProvider;

export const useProduct = () => {
    const context = useContext(PRODUCT_CONTEXT)
    return context;
}