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
    }, []);  

    let productsRow = products?.map(item => (
        <Card product ={item} key={item.id}/>    
    ))
    return(
        <div>
            <Header />
            <Main />
            <div className="card-row" >
                {isLoaded ? productsRow : Array(12).fill(0).map((_, index)  => <MyLoader key={index} />) }
            </div>
            <Footer />
            
        </div>
    )
}


export default Home