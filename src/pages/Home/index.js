import React, {useEffect} from 'react';
import Header from "../../components/header";
import Main from "../../components/main"
import Card from "../../components/card"
import Footer from "../../components/footer"
import { getProducts } from '../../store/actions/productActions'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux';
import MyLoader from '../../components/loader';


function Home() {
    const dispatch = useDispatch();
    const products = useSelector(({productReducer}) => productReducer.products);
    const isLoaded = useSelector(({productReducer}) => productReducer.isLoaded);
    
    useEffect(() => { 
        if (!products.length){
            dispatch(getProducts()); 
        } 
    }, [products.length, dispatch]);  

    let productsRow = products?.slice(0, 12).map(item => (
        <Card product ={item} key={item.id}/>    
    ))
    return(
        <div>
            <Header />
            <Main />
            <div className="card-row" >
                {isLoaded ? productsRow : Array.from(Array(12).keys()).map((index) => <MyLoader key={index} />) }
            </div>
            <Footer />
        </div>
    )
}


export default Home