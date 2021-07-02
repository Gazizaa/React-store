import React, {useEffect} from 'react'
import './index.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import BasketItem from '../../components/basketItem'
import { getBasket } from '../../store/actions/basketAction'
import { getProducts } from '../../store/actions/productActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

function Basket(props) {
    const {basket} = props.basketReducer
    const {products} = props.productReducer

    useEffect(() => {
        props.getBasket()
        props.getProducts()
        // eslint-disable-next-line 
    }, []);


    let basketData = []
    basket?.map(item => {
        products?.map(product => {
            if(+item.productID === product.id) {
                basketData.push({...product, amount: item.amount})
            }
        })
    })
    return (
        <div>
           <Header />
           <div className='basket-column'>
               <div>
                   <h1>Cart</h1> 
               </div>
               <div className='items'>
                   <BasketItem basketData={basketData}/> 
               </div>
           </div>
           <Footer />
        </div>
    )
}

const mapStateToProps=(state)=> ({
    productReducer: state.productReducer,
    basketReducer: state.basketReducer
})

export default connect(mapStateToProps, {getBasket, getProducts}) (withRouter (Basket))

