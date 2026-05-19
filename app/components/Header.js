"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount in case page is already scrolled
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      id="masthead" 
      className={`tm-header-style-classic2 tm-main-menu-total-8 tm-main-menu-more-than-six ${isScrolled ? 'is-header-scrolled' : ''}`}
    >
      <div className="tm-header-block">
        
        {/* TOP BAR */}
        <div className="themetechmount-topbar-wrapper">
          <div className="themetechmount-topbar-inner">
            <div className="container tm-container-for-topbar">
              <div className="tm-wrap tm-topbar-content">
                <div className="tm-wrap-cell topbar-left">
                  <ul className="top-contact">
                    <li>
                      <i className="tm-jassio-icon-clock"></i>
                      <span>Lundi au Samedi</span>
                    </li>
                  </ul>
                </div>
                <div className="tm-wrap-cell topbar-right">
                  <ul className="top-contact">
                    <li>
                      <i className="tm-jassio-icon-phone"></i>
                      <a href="tel:+33624371811">06 24 37 18 11</a>
                    </li>
                    <li>
                      <i className="tm-jassio-icon-mail"></i>
                      <a href="mailto:engy31@hotmail.fr">engy31@hotmail.fr</a>
                    </li>
                    <li>
                      <i className="tm-jassio-icon-location-1"></i>
                      <span>94 Chemin de la Peyrette, 31170 Tournefeuille</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN NAVIGATION BAR */}
        <div 
          id="tm-stickable-header-w" 
          className={`tm-stickable-header-w ${isScrolled ? 'is_stuck' : ''}`}
        >
          <div 
            id="site-header" 
            className="site-header tm-stickable-header"
          >
            <div className="site-header-main container">
            
              {/* Branding (Logo) */}
              <div className="site-branding">
                <Link className="home-link" href="/" title="TEMPS DANCE" rel="home">
                  <img 
                    className="standardlogo" 
                    alt="TEMPS DANCE" 
                    src="/assets/logo4.png" 
                  />
                </Link>
              </div>

              {/* Menu and CTA Button */}
              <div id="site-header-menu" className="site-header-menu">
                <nav 
                  id="site-navigation" 
                  className={`main-navigation ${mobileMenuOpen ? 'toggled tm-mmenu-active toggled-on' : ''}`} 
                  aria-label="Primary Menu"
                >
                  
                  {/* Desktop Links / Mobile Dropdown Container */}
                  <div className={`nav-menu-wrapper ${mobileMenuOpen ? 'show' : ''}`}>
                    <ul id="menu-menu" className="nav-menu">
                      <li className="menu-item"><Link href="/" onClick={() => setMobileMenuOpen(false)}>Accueil</Link></li>
                      <li className="menu-item"><Link href="/nos-cours-2" onClick={() => setMobileMenuOpen(false)}>Nos Cours</Link></li>
                      <li className="menu-item"><Link href="/les-professeurs" onClick={() => setMobileMenuOpen(false)}>Les Professeurs</Link></li>
                      <li className="menu-item"><Link href="/planning-tarifs" onClick={() => setMobileMenuOpen(false)}>Planning et Tarifs</Link></li>
                      <li className="menu-item"><Link href="/livre-d-or" onClick={() => setMobileMenuOpen(false)}>Livre D’Or</Link></li>
                      <li className="menu-item"><Link href="/faq" onClick={() => setMobileMenuOpen(false)}>F.A.Q</Link></li>
                      <li className="menu-item"><Link href="/albums" onClick={() => setMobileMenuOpen(false)}>Albums</Link></li>
                      <li className="menu-item"><Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
                    </ul>
                  </div>

                  {/* Header CTA Action Button */}
                  <div className="header-cta-wrapper">
                    <a href="tel:+33624371811" className="header-cta-button">
                      <span className="cta-icon-circle">
                        <i className="tm-jassio-icon-phone"></i>
                      </span>
                      <div className="cta-text-group">
                        <span className="cta-label">Appelez-nous</span>
                        <span className="cta-value">06 24 37 18 11</span>
                      </div>
                    </a>
                  </div>

                  {/* Mobile Menu Hamburger Toggle */}
                  <button 
                    id="menu-toggle" 
                    className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`} 
                    aria-expanded={mobileMenuOpen ? 'true' : 'false'} 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    <span className="hamburger-box">
                      <span className="hamburger-inner"></span>
                    </span>
                  </button>

                </nav>
              </div>

            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
