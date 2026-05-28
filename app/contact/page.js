"use client";


import Link from 'next/link';
import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(data.error || 'Une erreur est survenue.');
      }
    } catch (err) {
      setError('Erreur de connexion au serveur.');
    } finally {
      setLoading(false);
    }
  };

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
                    <article className="post-1312 page type-page status-publish hentry" id="post-1312">
                      <header className="single-entry-header tm-hide">
                        <h2 className="entry-title">Contact</h2>
                      </header>
                      
                      <div className="entry-content">
                        <div className="elementor elementor-1312">
                          
                          {/* Divider Section */}
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

                          {/* Heading Section */}
                          <section className="elementor-section elementor-top-section elementor-element tm-column-break-ipad-no tm-col-stretched-none elementor-section-boxed elementor-section-height-default inner-page-hero">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element tm-align-center elementor-widget elementor-widget-tm_heading">
                                    <div className="elementor-widget-container">
                                      <div className="tm-element-heading-content-wrapper center-align tm-reverse-heading-yes tm-seperator-none tm-heading-style-vertical">
                                        <div className="tm-content-header">
                                          <h4 className="tm-element-subhead">INFORMATION</h4>
                                          <h5 className="tm-element-overlay-subhead">Temps Dance</h5>
                                          <h2 className="tm-element-content-heading">Contact</h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          {/* Contact Form & Map Section */}
                          <section className="elementor-section elementor-top-section elementor-element tm-elementor-bg-color-grey elementor-section-stretched tm-column-break-ipad-yes tm-col-stretched-none elementor-section-boxed elementor-section-height-default">
                            <div className="elementor-background-overlay"></div>
                            <div className="elementor-container elementor-column-gap-no">
                              
                              {/* Left Column: Form */}
                              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element">
                                <div className="elementor-widget-wrap elementor-element-populated" style={{ padding: "50px", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 15px 40px rgba(0,0,0,0.06)", margin: "20px" }}>
                                  
                                  <div className="elementor-element tm-align-left elementor-widget elementor-widget-tm_heading">
                                    <div className="elementor-widget-container">
                                      <h2 style={{ fontFamily: "Oswald, Arial, sans-serif", fontSize: "38px", fontWeight: "700", color: "#1a1a1a", marginBottom: "15px", marginTop: "0" }}>Écrivez-nous</h2>
                                      <p style={{ fontFamily: "Inter, Arial, sans-serif", fontSize: "15px", color: "#666", lineHeight: "1.6", marginBottom: "35px" }}>
                                        Envoyez-nous un message et notre réception vous rappellera rapidement pour tout type de demande.
                                      </p>
                                    </div>
                                  </div>
                                  
                                  <div className="elementor-element elementor-widget elementor-widget-shortcode">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-shortcode">
                                        <div className="wpcf7 no-js" dir="ltr" lang="fr-FR">
                                          {submitted ? (
                                            <div className="alert alert-success" style={{ padding: "20px", borderRadius: "6px", backgroundColor: "#d4edda", borderColor: "#c3e6cb", color: "#155724" }}>
                                              Merci pour votre message. Il a été envoyé avec succès ! Notre équipe vous contactera très bientôt.
                                            </div>
                                          ) : (
                                            <form onSubmit={handleSubmit} className="wpcf7-form init">
                                              <div className="tm-commonform contactform-1">
                                                <div className="row">
                                                  <div className="col-md-12" style={{ marginBottom: "25px" }}>
                                                    <p style={{ position: "relative", margin: 0 }}>
                                                      <i className="fa fa-user-o" style={{ position: "absolute", left: "18px", top: "18px", color: "#666", fontSize: "16px" }}></i>
                                                      <span className="wpcf7-form-control-wrap" data-name="your-name">
                                                        <input 
                                                          required 
                                                          className="wpcf7-form-control wpcf7-text" 
                                                          style={{ paddingLeft: "50px", width: "100%", height: "55px", borderRadius: "6px", border: "1px solid #e8e8e8", backgroundColor: "#f9f9f9", fontSize: "15px", color: "#333", outline: "none", transition: "border-color 0.3s" }}
                                                          placeholder="Votre Nom*" 
                                                          type="text" 
                                                          value={formData.name} 
                                                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                          onFocus={(e) => e.target.style.borderColor = "#ff2a70"}
                                                          onBlur={(e) => e.target.style.borderColor = "#e8e8e8"}
                                                        />
                                                      </span>
                                                    </p>
                                                  </div>
                                                  <div className="col-md-12" style={{ marginBottom: "25px" }}>
                                                    <p style={{ position: "relative", margin: 0 }}>
                                                      <i className="fa fa-envelope-o" style={{ position: "absolute", left: "18px", top: "18px", color: "#666", fontSize: "16px" }}></i>
                                                      <span className="wpcf7-form-control-wrap" data-name="your-email">
                                                        <input 
                                                          required 
                                                          className="wpcf7-form-control wpcf7-email wpcf7-text" 
                                                          style={{ paddingLeft: "50px", width: "100%", height: "55px", borderRadius: "6px", border: "1px solid #e8e8e8", backgroundColor: "#f9f9f9", fontSize: "15px", color: "#333", outline: "none", transition: "border-color 0.3s" }}
                                                          placeholder="Votre Email*" 
                                                          type="email" 
                                                          value={formData.email} 
                                                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                          onFocus={(e) => e.target.style.borderColor = "#ff2a70"}
                                                          onBlur={(e) => e.target.style.borderColor = "#e8e8e8"}
                                                        />
                                                      </span>
                                                    </p>
                                                  </div>
                                                  <div className="col-md-12" style={{ marginBottom: "30px" }}>
                                                    <p style={{ position: "relative", margin: 0 }}>
                                                      <i className="fa fa-pencil-square-o" style={{ position: "absolute", left: "18px", top: "18px", color: "#666", fontSize: "16px" }}></i>
                                                      <span className="wpcf7-form-control-wrap" data-name="your-message">
                                                        <textarea 
                                                          required 
                                                          className="wpcf7-form-control wpcf7-textarea" 
                                                          style={{ paddingLeft: "50px", paddingTop: "18px", width: "100%", borderRadius: "6px", border: "1px solid #e8e8e8", backgroundColor: "#f9f9f9", fontSize: "15px", color: "#333", outline: "none", resize: "none", transition: "border-color 0.3s" }}
                                                          placeholder="Votre Message*" 
                                                          rows="5"
                                                          value={formData.message}
                                                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                                                          onFocus={(e) => e.target.style.borderColor = "#ff2a70"}
                                                          onBlur={(e) => e.target.style.borderColor = "#e8e8e8"}
                                                        ></textarea>
                                                      </span>
                                                    </p>
                                                  </div>
                                                </div>
                                                <div className="form-btn" style={{ width: "100%" }}>
                                                  {error && (
                                                    <div className="alert alert-danger" style={{ padding: "15px", marginBottom: "20px", borderRadius: "6px", backgroundColor: "#f8d7da", borderColor: "#f5c6cb", color: "#721c24" }}>
                                                      {error}
                                                    </div>
                                                  )}
                                                  <button 
                                                    disabled={loading}
                                                    type="submit" 
                                                    style={{ width: "100%", cursor: loading ? "not-allowed" : "pointer", border: "none", padding: "16px", borderRadius: "6px", backgroundColor: loading ? "#ccc" : "#ff2a70", color: "#fff", fontWeight: "700", fontFamily: "Oswald, Arial, sans-serif", fontSize: "16px", letterSpacing: "0.5px", transition: "background-color 0.3s ease", display: "flex", justifyContent: "center", alignItems: "center" }}
                                                  >
                                                    {loading ? "ENVOI EN COURS..." : "CONTACTEZ-NOUS"}
                                                    {!loading && <i className="fas fa-arrow-right" style={{ marginLeft: "8px", fontSize: "14px" }}></i>}
                                                  </button>
                                                </div>
                                              </div>
                                            </form>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </div>

                              {/* Right Column: Map */}
                              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element tm-rounded-map elementor-widget elementor-widget-html" style={{ width: "100%", height: "100%" }}>
                                    <div className="elementor-widget-container" style={{ height: "100%" }}>
                                      <iframe 
                                        allowFullScreen="" 
                                        height="643" 
                                        loading="lazy" 
                                        src="https://www.google.com/maps?q=94+Chemin+de+la+Peyrette,+31170+Tournefeuille,+France&output=embed" 
                                        style={{ border: 0, width: "100%", minHeight: "400px" }}
                                      ></iframe>
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
