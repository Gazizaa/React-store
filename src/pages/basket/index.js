import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './index.scss'
import Header from '../../components/header'
import Footer from '../../components/footer'
import BasketItem from '../../components/basketItem'

function Basket() {
    const basketReducer = useSelector(({basketReducer}) => basketReducer.basket);

    const emptyCart= <div className='emptyCart'>
        <p>Your cart is currently empty.</p>
        <Link to='/'><button>Return to shop</button></Link>
    </div> 

    return (
        <div>
           <Header />
           <div className='basket-column'>
               <div>
                   <h1>Cart</h1> 
               </div>
               <div className='items'>
                   {basketReducer.length === 0 ? emptyCart : <BasketItem basketData={basketReducer}/>}
               </div>
           </div>
           <Footer />
        </div>
    )
}


export default Basket
