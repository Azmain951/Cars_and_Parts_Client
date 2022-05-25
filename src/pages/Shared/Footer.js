import React from 'react';
import logo from '../../images/logo.png'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer p-10 py-20 shadow-2xl text-base-content">
            <div>
                <img src={logo} alt="" />
                <p>Cars and Parts Limited.<br />Providing reliable tech since 2002.<br />Copyright &copy; {year}, All rights reserved.</p>
                <p><small>Developed by : <span className='text-secondary'>Afridi Azmain</span></small></p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Products</a>
                <a className="link link-hover">Dashboard</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">Blogs</a>
                <a className="link link-hover">Portfolio</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;