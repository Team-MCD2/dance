"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header id="masthead" className="tm-header-style-classic2 tm-main-menu-total-8 tm-main-menu-more-than-six">
      <div className="tm-header-block tm-mmenu-active-color-skin tm-dmenu-active-color-skin tm-dmenu-sep-no">
        
        <div className="themetechmount-topbar-wrapper tm-bgcolor-grey tm-textcolor-custom">
          <div className="themetechmount-topbar-inner">
            <div className="container tm-container-for-topbar">
              <div className="tm-wrap tm-topbar-content">
                <div className="tm-wrap-cell">
                  <ul className="top-contact tm-tophighlight-left">
                    <li><i className="tm-jassio-icon-clock"></i>Lundi au Samedi</li>
                  </ul>
                </div>
                <div className="tm-wrap-cell tm-align-right">
                  <ul className="top-contact">
                    <li><i className="tm-jassio-icon-phone"></i><a href="tel:+33624371811">06 24 37 18 11</a></li>
                    <li><i className="tm-jassio-icon-mail"></i><a href="mailto:engy31@hotmail.fr">engy31@hotmail.fr</a></li>
                    <li><i className="tm-jassio-icon-location-1"></i>94 Chemin de la Peyrette, 31170 Tournefeuille</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="tm-stickable-header-w" className="tm-stickable-header-w tm-bgcolor-white" style={{height: "100px"}}>
          <div id="site-header" className="site-header tm-bgcolor-white tm-sticky-bgcolor-custom tm-header-menu-position-right tm-mmmenu-override-yes tm-headerborder-none tm-above-content-no tm-stickable-header">
            
            <div className="site-header-main tm-wrap container tm-container-for-header">
            
              <div className="site-branding tm-wrap-cell">
                <div className="headerlogo themetechmount-logotype-image tm-stickylogo-no">
                  <h1 className="site-title">
                    <Link className="home-link" href="/" title="TEMPS DANCE" rel="home">
                      <span className="tm-sc-logo tm-sc-logo-type-image">
                        <img className="themetechmount-logo-img standardlogo" alt="TEMPS DANCE" src="/assets/logo4.png" />
                      </span>
                    </Link>
                  </h1>
                </div>
              </div>

              <div id="site-header-menu" className="site-header-menu tm-wrap-cell">
                <nav id="site-navigation" className={`main-navigation ${mobileMenuOpen ? 'toggled tm-mmenu-active toggled-on' : ''}`} aria-label="Primary Menu" data-sticky-height="95">
                  <div className="tm-header-text-area">
                    <div className="header-info-widget">
                      <div className="tm-header-rightbg">
                        <div className="tm-iconright"><i className="tm-jassio-icon-phone"></i></div>
                        <div className="tm-textheader"><h3>06 24 37 18 11</h3></div>
                        <div className="elementor-element tm-btn-shape-rounded elementor-align-right tm-btn-color tm-btn-style-flat elementor-widget elementor-widget-button">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <a href="tel:+33624371811" className="elementor-button-link elementor-button elementor-size-md">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-icon elementor-align-icon-right">
                                    <i className="tm-jassio-icon-right-thin"></i>
                                  </span>
                                  <span className="elementor-button-text">Appelez-nous</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>										
                  
                  <button id="menu-toggle" className="menu-toggle" aria-expanded={mobileMenuOpen ? 'true' : 'false'} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <span className="tm-hide">Toggle menu</span><i className={mobileMenuOpen ? "tm-jassio-icon-close" : "tm-jassio-icon-bars"}></i>
                  </button>

                  <div className={`nav-menu ${mobileMenuOpen ? 'show' : ''}`}>
                    <ul id="menu-menu" className="nav-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page"><Link href="/" onClick={() => setMobileMenuOpen(false)}>Accueil</Link></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page"><Link href="/nos-cours-2" onClick={() => setMobileMenuOpen(false)}>Nos Cours</Link></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page"><Link href="/les-professeurs" onClick={() => setMobileMenuOpen(false)}>Les Professeurs</Link></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page"><Link href="/planning-tarifs" onClick={() => setMobileMenuOpen(false)}>Planning et Tarifs</Link></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page"><Link href="/livre-d-or" onClick={() => setMobileMenuOpen(false)}>Livre D’Or</Link></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page"><Link href="/faq" onClick={() => setMobileMenuOpen(false)}>F.A.Q</Link></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page lastsecond"><Link href="/albums" onClick={() => setMobileMenuOpen(false)}>Albums</Link></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page last"><Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
                    </ul>
                  </div>				
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
