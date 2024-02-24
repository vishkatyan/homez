import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left side */}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="f-logo" width ={120} />

                <span className="secondaryText">
                    Our vision is to make all people <br />
                    the best place to live for them.
                </span>
            </div>
            {/* right side */}
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>145 New York, Fl 4571, USA</span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
                <span>Design & Developed by <a href="https://www.linkedin.com/in/vishkatyan" target='_blank'>Vishakha</a></span>

            </div>
        </div>
    </section>
  )
}
export default Footer
