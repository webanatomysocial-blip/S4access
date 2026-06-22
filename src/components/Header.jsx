"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from '../assets/images/Mainlogo.png';
import fav from '../assets/images/favic-white.svg';
import '../css/Header.css';
import MegaMenu from './MegaMenu.jsx';

function Header(props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hideTimeout = useRef();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuEnter = () => {
    clearTimeout(hideTimeout.current);
    setShowMegaMenu(true);
  };
  
  const handleMenuLeave = () => {
    hideTimeout.current = setTimeout(() => setShowMegaMenu(false), 200);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const getActiveClass = (path, end = false) => {
    if (end) {
      return pathname === path ? 'active' : '';
    }
    return pathname?.startsWith(path) ? 'active' : '';
  };

  const isBlackBg = pathname === '/insights' || pathname?.startsWith('/blogs') || pathname?.startsWith('/customer-success') || pathname?.startsWith('/services');
  const initialBgColor = isBlackBg ? '#000000' : 'transparent';

  if (pathname === '/quiz' || pathname === '/quiz/start') {
    return null;
  }

  return (
    <>
      {/* Desktop Header */}
      <nav className={`only-windows navbar ${isScrolled ? 'scrolled' : ''}` } style={{ background: isScrolled ? undefined : initialBgColor }}>
        <div className="logo">
          <Link href="/">
            <Image className="main-logo" src={logo} alt="S4access Logo" width="210" height="40" />
          </Link>
          <Image className="star-logo" src={fav} alt="Star Logo" width="40" height="40" />
        </div>
        <div className="nav-list">
          <ul>
            <li>
              <Link href="/" className={getActiveClass('/', true)}>
                Home
              </Link>
            </li>
           
            <li
              onMouseEnter={handleMenuEnter}
              onMouseLeave={handleMenuLeave}
            >
              <Link href="/services" className={getActiveClass('/services')}>
                Services
              </Link>
              <MegaMenu show={showMegaMenu} setShow={setShowMegaMenu} />
            </li>
            <li>
              <Link href="/customer-success" className={getActiveClass('/customer-success')}>
                Customer Success
              </Link>
            </li>
            <li>
              <Link href="/insights" className={getActiveClass('/insights')}>
                Insights
              </Link>
            </li>
          <li>
            <Link href="/careers" className={getActiveClass('/careers')}>
              Careers
            </Link>
          </li>
           <li>
              <Link href="/about" className={getActiveClass('/about')}>
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="button-contact">
          <Link href="/contact">Contact Us</Link>
        </div>
      </nav>

      {/* Mobile Header */}
      <nav className={`only-mobile mobile-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="mobile-nav-top">
          <div className="mobile-logo">
            <Link href="/" onClick={closeMobileMenu}>
              <Image src={logo} alt="S4access Logo" width="210" height="40" />
            </Link>
          </div>
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        <div className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link href="/" className={getActiveClass('/', true)} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className={getActiveClass('/services')} onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/customer-success" className={getActiveClass('/customer-success')} onClick={closeMobileMenu}>
                Customer Success
              </Link>
            </li>
            <li>
              <Link href="/insights" className={getActiveClass('/insights')} onClick={closeMobileMenu}>
                Insights
              </Link>
            </li>
            <li>
              <Link href="/careers" className={getActiveClass('/careers')} onClick={closeMobileMenu}>
                Careers
              </Link>
            </li>
            <li>
              <Link href="/about" className={getActiveClass('/about')} onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className={getActiveClass('/contact')} onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;