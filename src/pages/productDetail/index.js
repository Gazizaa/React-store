import React, {useEffect, useState} from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer"
import { getProductDetails} from '../../store/actions/productActions'
import './index.css'
import {addToBasket} from '../../store/actions/basketAction'
import { connect } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link, withRouter } from 'react-router-dom';


function ProductDetails(props) {

    const {productDetails} = props.productReducer;
    const [showFullImg, setShowFullImg] = useState(false);
    const [showViewCard, setShowViewCard] = useState(false);
    const [amountInput, setAmountInput] = useState(0);

    useEffect(() => {  
       props.getProductDetails(props.match.params.id)
       // eslint-disable-next-line 
    }, []);    
    
    const fullImg = <div className='full-img' onClick={() => setShowFullImg(false)}>
                      <img src={productDetails.image} alt='glass' />
                    </div>

    const viewCard= <div className='viewCard'>
        <p>'{productDetails.name}' has been added to your cart.</p>
        <Link to='/basket'><button>View cart</button></Link>
    </div>                

    let addItem = () => {
            props.addToBasket({
            productId: productDetails.id,
            name: productDetails.name,
            image: productDetails.image,
            price: productDetails.price,
            amount: amountInput 
        }); 
        setShowViewCard(true); 
    }  

    return(
        <div>
            <Header />
            {showViewCard ? viewCard: ''}
            {showFullImg ? fullImg : ''}
            <div className='product-detail-row'>
                <div className='product-item'>
                    <button className="search-btn" onClick={() => setShowFullImg(true)}><img src='https://dessign.net/shopper-woocommerce-theme/wp-content/themes/ShopperWooThemePremium3/images/search-icon.png' alt='search' /></button>
                    <img src={productDetails.image} alt='glass' />
                </div>
                <div className='product-item'>
                    <h1>{productDetails.name}</h1>
                    <p className='price-p'>${productDetails.price}</p>
                    <p>{productDetails.description}</p>
                    <div className='add-cart'>
                        <input type='number' name='amountInput' onChange={(e) => setAmountInput(e.target.value)} value={amountInput} min='1'></input>
                        <button onClick={() => addItem()}>ADD TO CART</button>
                    </div>
                    <p>SKU: MG Categories: All Products, Modern, Sale</p>
                </div>
            </div>
            <Tabs className='tabs'>
                <TabList>
                    <Tab style={{'fontWeight': "700"}}>Description</Tab>
                </TabList>
                <TabPanel>
                    <p>{productDetails.description}</p>
                </TabPanel>
            </Tabs>
            <Footer />
        </div>
    )
}

const mapStateToProps=(state)=> ({
    productReducer: state.productReducer
})

export default connect(mapStateToProps, {getProductDetails, addToBasket}) (withRouter (ProductDetails))