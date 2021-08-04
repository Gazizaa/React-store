import React from 'react'
import './index.scss'

function Footer() {
    return(
        <div className="footer">
            <div className="footer-row">
                <div className="footer-column">
                    <h1>ABOUT US</h1>
                    <p>WooCommerce is now the most popular eCommerce platform on the web so you can rest assured you're in good company.</p>
                </div>
                <div className="footer-column">
                    <h1>WORK WITH US</h1>
                    <p>We work with eCommerce solutions. Most popular eCommerce platform on the web so you can rest assured you're in good company.</p>
                </div>
                <div className="footer-column">
                    <h1>NEWSLETTER</h1>
                    <div className="footer-input">
                        <h2>Email address:</h2>
                        <input type="email" placeholder="Your email address"></input>
                        <button>SIGN UP</button>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <p>© 2021 All Rights Reserved. CREATED BY GAZIZA AGATAYEVA</p>
            </div>
        </div>
    )
}

export default Footer