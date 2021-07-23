import React from 'react';
import './index.scss'
import Header from '../../components/header';
import Footer from '../../components/footer'

const Blog = () => {
    return (
        <>
            <Header />
            <div className='blog-row'>
                <div className='blog-text'>
                    <img src='https://dessign.net/virtualstore/wp-content/uploads/2016/02/purple-white-design-decoration.jpg' alt='img'/>
                    <h2>PURPLE WHITE DECORATIONS HOME</h2>
                    <p>Simplicity and functionalism to design buildings, furniture and household objects, many of which have become iconic and are still in use and production. Prominent examples are the egg ...</p>
                </div>
                <div className='blog-text'>
                    <img src='https://dessign.net/virtualstore/wp-content/uploads/2016/02/pexels-photo-29910.jpg' alt='img'/>
                    <h2>MODERN ROOM BLOG POST AND ARCHITECTURE</h2>
                    <p>Museum books were traditionally made of washi, or Japanese paper. This durable, fibrous paper does not easily yellow or become brittle with age, which has contributed to the ...</p>
                </div>        
            </div>
            <div className='blog-row'>
                <div className='blog-text'>
                    <img src='https://dessign.net/virtualstore/wp-content/uploads/2016/02/stairs-home-loft-lifestyle.jpg' alt='img'/>
                    <h2>MODERN ARCHITECTURE AND HOME POST</h2>
                    <p>Museum books were traditionally made of washi, or Japanese paper. This durable, fibrous paper does not easily yellow or become brittle with age, which has contributed to the remarkable ...</p>
                </div>
                <div className='blog-text'>
                    <img src='https://dessign.net/virtualstore/wp-content/uploads/2016/02/stool.jpg' alt='img'/>
                    <h2>OUTDOOR CREATIVE MODERN HOME DESIGN</h2>
                    <p>Museum books were traditionally made of washi, or Japanese paper. This durable, fibrous paper does not easily yellow or become brittle with age, which has contributed to the remarkable ...</p>
                </div>        
            </div>
            <div className='blog-row'>
                <div className='blog-text'>
                    <img src='https://dessign.net/virtualstore/wp-content/uploads/2016/02/pexels-photo-29907.jpg' alt='img'/>
                    <h2>DIGITAL AND MODERN BLOG WHITE TABLE</h2>
                    <p>Museum books were traditionally made of washi, or Japanese paper. This durable, fibrous paper does not easily yellow or become brittle with age, which has contributed to the remarkable ...</p>
                </div>
                <div className='blog-text'>
                    <img src='https://dessign.net/virtualstore/wp-content/uploads/2016/02/couch-furniture-living-room-sofa.jpg' alt='img'/>
                    <h2>CREATIVE AND MODERN BLOG POST</h2>
                    <p>Museum books were traditionally made of washi, or Japanese paper. This durable, fibrous paper does not easily yellow or become brittle with age, which has contributed to the remarkable ...</p>
                </div>        
            </div>
            <Footer />
        </>
    )
}

export default Blog
