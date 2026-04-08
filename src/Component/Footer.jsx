import React from 'react';

const Footer = () => {
    return (
        <div>
<footer>

  <div className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 pr-0 pl-20">
    <nav>
      <h1 className="text-3xl font-bold">DigiTools</h1>
      <p className="font-">Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
  </nav>              
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>

<nav>
    <p>Social Links</p>
    <div className="space-x-2">
        <button><i class="fa-brands fa-facebook"></i></button>
        <button><i class="fa-brands fa-instagram"></i></button>
        <button><i class="fa-brands fa-x-twitter"></i></button>
    </div>
</nav>
  </div>
  
</footer>
  
        </div>
    );
};

export default Footer;