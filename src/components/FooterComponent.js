import React, { Component } from 'react';
import '../App.css';
import mainLogo from '../assets/images/logowhite.png';

const Footer = (props) => {
    return (
        <div className='footer col-12 col-md-12'>
        <div className='row'>
            <div className='col-1 offset-xl-1'></div>
            <div className='col-xl-3 col-md-10 col-12 d-flex flex-column align-items-center align-self-center about'>
                <h5>About Home Gym Equipment</h5>
                <p style={{ textAlign: 'center' }}>Home Gym Equipment is an online sales of second-hand good quality equipments. 
                We're sharing knowledge about fitness. We can offer best services for you.</p>
            </div>
            <div className='logo_social offset-xl-1 offset-lg-4'>
            <div className='col-lg-3 col-md-3 col-12 d-flex justify-content-center align-self-center'>
                <a href=''><img src={mainLogo} alt='main-logo' /></a>
            </div>
            </div>
            <div className='col-lg-3 col-md-4 col-12 d-flex flex-column align-items-center align-self-center'>
                <h5>Follow us</h5>
                <div className='social-icon'>
                <a href='' class="fa fa-facebook"></a>
                <a href='' class="fa fa-twitter"></a>
                <a href='' class="fa fa-instagram"></a>
                <a href='' class="fa fa-youtube"></a>
                </div>
            </div>
            <div className='col-1'></div>
        </div>
    </div>
    )
}
 
export default Footer;