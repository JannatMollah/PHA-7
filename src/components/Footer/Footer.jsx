import React from 'react';
import xLogo from '../../assets/x.png'
import mailLogo from '../../assets/mail.png'
import fbLogo from '../../assets/fb.png'
import inLogo from '../../assets/in.png'

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 border-b-1 border-gray-700 mt-10">
            <nav>
                <h6 className="footer-title">CS — Ticket System</h6>
                <p className="max-w-xs">Best customer support Service Provider in the world. We deliver fast, reliable,
                    and professional support for all our clients.</p>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Our Mission</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Products & Services</a>
                <a className="link link-hover">Customer Stories</a>
                <a className="link link-hover">Download Apps</a>
            </nav>
            <nav>
                <h6 className="footer-title">Information</h6>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Terms & Conditions</a>
                <a className="link link-hover">Join Us</a>
            </nav>
            <nav>
                <h6 className="footer-title">Social Links</h6>
                <a className="link link-hover flex items-center gap-2"><img src={xLogo} alt="" />@CS — Ticket System</a>
                <a className="link link-hover flex items-center gap-2"><img src={inLogo} alt="" />@CS — Ticket System</a>
                <a className="link link-hover flex items-center gap-2"><img src={fbLogo} alt="" />@CS — Ticket System</a>
                <a className="link link-hover flex items-center gap-2"><img src={mailLogo} alt="" />support@cst.com</a>
            </nav>
        </footer>
    );
};

export default Footer;