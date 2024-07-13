import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <aside className='grid grid-cols-2 place-items-center'>
        <img src={logo} className='h-28 rounded-full' />
        <p className='text-3xl'>
          Avighna
        </p>
      </aside>
      {/* <nav>
        <h6 className="footer-title">Services</h6>
        <Link to={""} className="link link-hover">Branding</Link>
        <Link to={""} className="link link-hover">Design</Link>
        <Link to={""} className="link link-hover">Marketing</Link>
        <Link to={""} className="link link-hover">Advertisement</Link>
      </nav> */}
      <div className="flex flex-row gap-20 md:gap-32 lg:gap-64 md:text-xl">
        <ul>
          <h6 className="footer-title">Organization</h6>
          <li><Link to={"/about-us"} className="link link-hover">About us</Link></li>
          <li><Link to={"/contact-us"} className="link link-hover">Contact</Link></li>
          <Link to={"/donation"} className="link link-hover">Donation</Link>
        </ul>
        <ul>
          <h6 className="footer-title">Legal</h6>
          <li><Link to={"/terms-and-conditions"} className="link link-hover">Terms and Conditions</Link></li>
          <li><Link to={"/privacy-policy"} className="link link-hover">Privacy policy</Link></li>
          <li><Link to={"/refund-policy"} className="link link-hover">Refund policy</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer