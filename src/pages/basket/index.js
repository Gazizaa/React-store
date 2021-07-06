import React from 'react'
import { useSelector } from 'react-redux'
import './index.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import BasketItem from '../../components/basketItem'



function Basket() {
    const basketReducer = useSelector(({basketReducer}) => basketReducer.basket)

    return (
        <div>
           <Header />
           <div className='basket-column'>
               <div>
                   <h1>Cart</h1> 
               </div>
               <div className='items'>
                   <BasketItem basketData={basketReducer}/> 
               </div>
           </div>
           <Footer />
        </div>
    )
}


export default Basket
