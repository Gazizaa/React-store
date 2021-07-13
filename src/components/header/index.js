import React, {useState, useEffect, useRef} from 'react'
import {getCategories} from '../../store/actions/categoryActions'
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom'
import './index.scss'


function Header() {
    const [menu, setMenu] = useState(false);
    const subMenuRef = useRef();
   
    const handleClick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if(!path.includes(subMenuRef.current)) {
            setMenu(false)
        }
    }

    useEffect(()=> {
         document.body.addEventListener('click', handleClick); 
    }, [])
   
    return (
        <div>
            <div className="header">
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li onClick={() => setMenu(!menu)} className='subMenuClick' ref={subMenuRef}>Category</li>
                           { menu && <div className='submenu'>
                                <ul>
                                    <li>All Products</li>
                                    <li>Furniture</li>
                                    <li>Modern</li>
                                    <li>Products</li>
                                </ul>
                            </div> }
                        <li>Blog</li>
                        <li><Link to='/basket'>Cart</Link></li>
                        <li>Checkout</li>
                        <li>My Account</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
            <div className="logo">
                <Link to='/' ><img src='https://dessign.net/virtualstore/wp-content/themes/VirtualStoreWooResOrg/images/logo.png' alt='logo' /></Link>
            </div>
        </div>
    )
}
const mapStateToProps=(state)=> ({
    categoriesReducer: state.categoriesReducer
})

export default connect(mapStateToProps, {getCategories})(withRouter(Header))


