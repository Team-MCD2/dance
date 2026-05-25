"use client";


import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PlanningTarifsPage() {
  const cards = [
    {
      title: "TARIFS 2025/2026",
      image: "/assets/wp-content/uploads/2025/05/TARIFS-2025_-2026_page-0001-723x1024.jpg",
      link: "/assets/wp-content/uploads/2025/05/TARIFS-2025_-2026_page-0001-scaled.jpg"
    },
    {
      title: "FICHE D'INSCRIPTION 2025/2026",
      image: "/assets/wp-content/uploads/2025/05/fiche-d-insciption-2025-2026_page-0001-724x1024.jpg",
      link: "/assets/wp-content/uploads/2025/05/fiche-d-insciption-2025-2026_page-0001.jpg"
    },
    {
      title: "PLANNING 2025/2026",
      image: "/assets/wp-content/uploads/2025/06/planning-2025-2026-_page-0001-723x1024.jpg",
      link: "/assets/wp-content/uploads/2025/06/planning-2025-2026-_page-0001-scaled.jpg"
    }
  ];

  return (
    <>
      <div id="tm-home"></div>
      <div className="main-holder">
        <div id="page" className="hfeed site">
          <Header />
          
          <div className="site-content-wrapper" id="content-wrapper">
            <div className="site-content" id="content">
              <div className="site-content-inner" id="content-inner">
                <div className="content-area container" id="primary">
                  <main className="site-main" id="main">
                    <article className="post-1305 page type-page status-publish hentry" id="post-1305">
                      <header className="single-entry-header tm-hide">
                        <h2 className="entry-title">Planning et Tarifs</h2>
                      </header>
                      
                      <div className="entry-content">
                        <div className="elementor elementor-1305">
                          
                          {/* Divider/Spacer Section */}
                          <section className="elementor-section elementor-top-section elementor-element elementor-section-full_width elementor-section-stretched tm-column-break-ipad-no tm-col-stretched-none elementor-section-height-default">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-divider">
                                        <span className="elementor-divider-separator"></span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          {/* Page Title Header */}
                          <section className="elementor-section elementor-top-section elementor-element elementor-section-stretched tm-column-break-ipad-no tm-col-stretched-none elementor-section-boxed elementor-section-height-default inner-page-hero">
                            <div className="elementor-background-overlay"></div>
                            <div className="elementor-container elementor-column-gap-no">
                              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element tm-align-center elementor-widget elementor-widget-tm_heading">
                                    <div className="elementor-widget-container">
                                      <div className="tm-element-heading-content-wrapper center-align tm-reverse-heading-yes tm-seperator-none tm-content-with-desc tm-heading-style-vertical">
                                        <div className="tm-content-header">
                                          <h4 className="tm-element-subhead">INFORMATION</h4>
                                          <h5 className="tm-element-overlay-subhead">Temps Dance</h5>
                                          <h2 className="tm-element-content-heading">Planning et tarifs</h2>
                                        </div>
                                        <div className="tm-element-content-desctxt">
                                          Nous vous proposons nos tarifs ci-dessous et notre planning de la salle de dance.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          {/* 3 Columns Section (Cards for Tarifs, Form, Schedule) */}
                          <section className="elementor-section elementor-top-section elementor-element tm-column-break-ipad-no tm-col-stretched-none elementor-section-boxed elementor-section-height-default" style={{ padding: "50px 0" }}>
                            <div className="elementor-container elementor-column-gap-default" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                              {cards.map((card, idx) => (
                                <div key={idx} className="elementor-column elementor-col-33 elementor-top-column elementor-element" style={{ flex: "1 1 30%", minWidth: "280px", margin: "15px", display: "flex", flexDirection: "column" }}>
                                  <div className="elementor-widget-wrap elementor-element-populated" style={{ padding: "20px", border: "1px solid #f0f0f0", borderRadius: "10px", backgroundColor: "#fff", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                                    
                                    {/* Image */}
                                    <div className="elementor-element elementor-widget elementor-widget-image" style={{ textAlign: "center", marginBottom: "20px" }}>
                                      <div className="elementor-widget-container">
                                        <Image 
                                          alt={card.title} 
                                          src={card.image} 
                                          width={723}
                                          height={1024}
                                          style={{ maxWidth: "100%", height: "auto", borderRadius: "6px", border: "1px solid #eee", boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }}
                                        />
                                      </div>
                                    </div>

                                    {/* Heading */}
                                    <div className="elementor-element elementor-widget elementor-widget-heading" style={{ textAlign: "center", marginBottom: "15px" }}>
                                      <div className="elementor-widget-container">
                                        <h2 className="elementor-heading-title" style={{ fontSize: "20px", fontWeight: "600", fontFamily: "Oswald, Arial, sans-serif", margin: 0, color: "#232323", minHeight: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                          {card.title}
                                        </h2>
                                      </div>
                                    </div>

                                    {/* Button */}
                                    <div className="elementor-element elementor-align-center tm-btn-color-skincolor tm-btn-style-flat tm-btn-shape-square elementor-widget elementor-widget-button" style={{ textAlign: "center" }}>
                                      <div className="elementor-widget-container">
                                        <div className="elementor-button-wrapper">
                                          <a 
                                            className="elementor-button elementor-button-link elementor-size-sm" 
                                            href={card.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            style={{ display: "inline-block", padding: "12px 30px", backgroundColor: "#ff2a70", color: "#fff", borderRadius: "6px", fontWeight: "600", textDecoration: "none", fontSize: "14px", textTransform: "uppercase", transition: "background-color 0.2s ease" }}
                                          >
                                            <span className="elementor-button-content-wrapper">
                                              <span className="elementor-button-text">Cliquez ici</span>
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              ))}
                            </div>
                          </section>

                          {/* YouTube Video and Contact Section */}
                          <section className="elementor-section elementor-top-section elementor-element tm-column-break-ipad-no tm-col-stretched-none elementor-section-boxed elementor-section-height-default" style={{ padding: "50px 0" }}>
                            <div className="elementor-container elementor-column-gap-default" style={{ display: "flex", flexWrap: "wrap" }}>
                              
                              {/* Video Column */}
                              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element" style={{ flex: "1 1 50%", minWidth: "300px", padding: "15px" }}>
                                <div className="elementor-widget-wrap elementor-element-populated" style={{ position: "relative", paddingTop: "56.25%", height: 0, overflow: "hidden", borderRadius: "10px", boxShadow: "0 15px 35px rgba(0,0,0,0.1)" }}>
                                  <iframe 
                                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                                    src="https://www.youtube.com/embed/6sVr7vPRvnY?controls=1" 
                                    title="YouTube video player" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                  />
                                </div>
                              </div>

                              {/* Contact CTA Column */}
                              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element" style={{ flex: "1 1 50%", minWidth: "300px", padding: "15px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  
                                  {/* Heading */}
                                  <div className="elementor-element tm-align-center elementor-widget elementor-widget-tm_heading" style={{ marginBottom: "25px" }}>
                                    <div className="elementor-widget-container">
                                      <div className="tm-element-heading-content-wrapper center-align tm-reverse-heading-yes tm-seperator-none tm-heading-style-vertical">
                                        <div className="tm-content-header">
                                          <h4 className="tm-element-subhead" style={{ color: "#ff2a70", fontWeight: "600" }}>PLUS D'INFORMATION</h4>
                                          <h5 className="tm-element-overlay-subhead" style={{ top: "-15px" }}>Temps Dance</h5>
                                          <h2 className="tm-element-content-heading">NOUS CONTACTER</h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Text content */}
                                  <div className="elementor-element elementor-widget elementor-widget-text-editor" style={{ marginBottom: "30px", color: "#616161", fontSize: "14px", lineHeight: "24px" }}>
                                    <div className="elementor-widget-container">
                                      <p>Vous cherchez à contacter ou avoir plus d’information. <br/>Nous sommes une école de danse composée de plusieurs passionnés.</p>
                                      <p>Afin de répondre à votre demande le plus efficacement possible veuillez remplir le formulaire le plus adapté à votre demande.<br/><br/>Vous pouvez aussi avoir plus d’information ou voir nos cours en cliquant sur le bouton ci-dessous !</p>
                                    </div>
                                  </div>

                                  {/* CTA Button */}
                                  <div className="elementor-element elementor-align-center tm-btn-color-skincolor tm-btn-style-flat tm-btn-shape-square elementor-widget elementor-widget-button">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-button-wrapper">
                                        <Link 
                                          className="elementor-button elementor-button-link elementor-size-sm" 
                                          href="/contact"
                                          style={{ display: "inline-block", padding: "12px 35px", backgroundColor: "#ff2a70", color: "#fff", borderRadius: "6px", fontWeight: "600", textDecoration: "none", fontSize: "14px", textTransform: "uppercase", transition: "background-color 0.2s ease" }}
                                        >
                                          <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">CONTACTEZ-NOUS</span>
                                          </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </div>

                            </div>
                          </section>

                        </div>
                      </div>
                    </article>
                  </main>
                </div>
              </div>
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
      <Link id="totop" href="#top" style={{ display: "none" }}><i className="tm-jassio-icon-angle-up"></i></Link>
    </>
  );
}
