import React, { useEffect } from 'react';
import './index.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/actions/productActions';
import Card from '../../components/card';


const AllProducts = () => {

    const dispatch = useDispatch();
    const products = useSelector(({productReducer}) => productReducer.products);

      useEffect(() => { 
        if (!products.length){
            dispatch(getProducts()); 
        } 
    }, [products.length, dispatch]); 

     let productsRow = products?.map(item => (
        <Card product = {item} key={item.id}/>    
    ))
    return (
        <>
        <Header />
        <div className='allproducts-row'>
            <div>
                <h2>All Products</h2>
                <p>Showing 1–15 of 21 results</p>
            </div>
            <div>
                <input />
            </div>
        </div>
        <div className="card-row" >
            {/*  {isLoaded ? productsRow : Array.from(Array(12).keys()).map((index) => <MyLoader key={index} />) } */}
            {productsRow} 
        </div>     
        <Footer />    
        </>
    )
}

export default AllProducts
