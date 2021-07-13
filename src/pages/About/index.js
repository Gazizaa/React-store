import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import './index.scss';
import about from '../../about.jpg';

const About = () => {
    return (
        <>
           <Header />
           <div className='about_div'>
                <h1>About</h1> 
               <img src={about} alt='about'/>
               <p>When space is at a premium, such as some types of magazine, newspaper, and yellow pages advertising, white space is limited in order to get as much vital information on to the page as possible. A page crammed full of text or graphics with very little white space runs the risk of appearing busy, cluttered, and is typically difficult to read. Some designs compensate for this problem through the careful use of leading and typeface.</p>
               <p>Your art choice has to inject a fresh outlook and say something unique about your home and you.Art and design have always been related, but today, experimentation and personal expression are the name of the game. Homeowners are using art to make a personal statement – your art choice has to inject a fresh outlook and say something unique about your home and you.</p>
           </div>
           <Footer/>
        </>
    )
}

export default About
