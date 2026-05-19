"use client";

import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DepotTemoignagePage() {
  const [formData, setFormData] = useState({
    client_name: '',
    post_content: '',
    featured_image: null,
    star_rating: 0
  });

  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.client_name || !formData.post_content) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleRatingClick = (rating) => {
    setFormData(prev => ({ ...prev, star_rating: rating }));
  };

  return (
    <>
      <div id="tm-home"></div>
      <div className="main-holder">
        <div id="page" className="hfeed site">
          <Header />
          
          <div className="site-content-wrapper" id="content-wrapper">
            <div className="site-content container" id="content">
              <div className="site-content-inner row multi-columns-row" id="content-inner">
                <div className="elementor elementor-7616" style={{ width: "100%", padding: "50px 15px" }}>
                  
                  {/* Title block */}
                  <section className="elementor-section elementor-top-section elementor-element tm-column-break-ipad-no tm-col-stretched-none elementor-section-boxed elementor-section-height-default">
                    <div className="elementor-container elementor-column-gap-default" style={{ justifyContent: "center" }}>
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element tm-align-center elementor-widget elementor-widget-tm_heading">
                            <div className="elementor-widget-container">
                              <div className="tm-element-heading-content-wrapper center-align tm-reverse-heading-yes tm-seperator-none tm-content-with-desc tm-heading-style-vertical">
                                <div className="tm-content-header" style={{ textAlign: "center", marginBottom: "40px" }}>
                                  <h4 className="tm-element-subhead" style={{ color: "#ff2a70", fontWeight: "600" }}>
                                    VOS AVIS
                                  </h4>
                                  <h5 className="tm-element-overlay-subhead" style={{ top: "-15px" }}>
                                    Temps Dance
                                  </h5>
                                  <h2 className="tm-element-content-heading">
                                    Votre témoignage
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Form Container */}
                  <section className="elementor-section elementor-top-section elementor-element tm-column-break-ipad-no tm-col-stretched-none elementor-section-boxed elementor-section-height-default">
                    <div className="elementor-container elementor-column-gap-default" style={{ justifyContent: "center" }}>
                      <div 
                        className="elementor-column elementor-col-60" 
                        style={{ 
                          width: "100%", 
                          maxWidth: "600px", 
                          margin: "0 auto", 
                          background: "#fff", 
                          padding: "40px 30px", 
                          borderRadius: "12px", 
                          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.05)" 
                        }}
                      >
                        {isSubmitted ? (
                          <div style={{ textAlign: "center", padding: "30px 10px" }}>
                            <div style={{ 
                              width: "70px", 
                              height: "70px", 
                              borderRadius: "50%", 
                              backgroundColor: "#edfbf7", 
                              color: "#2bd891", 
                              display: "inline-flex", 
                              alignItems: "center", 
                              justifyContent: "center", 
                              fontSize: "32px",
                              marginBottom: "20px"
                            }}>
                              ✓
                            </div>
                            <h3 style={{ fontSize: "22px", color: "#232323", marginBottom: "10px" }}>Merci pour votre témoignage !</h3>
                            <p style={{ color: "#616161", fontSize: "15px" }}>
                              Votre avis a été soumis avec succès et sera publié après modération.
                            </p>
                          </div>
                        ) : (
                          <form onSubmit={handleSubmit} className="wpmtst-submission-form">
                            <p style={{ fontSize: "13px", color: "#ff2a70", marginBottom: "20px" }}>
                              <span style={{ color: "#ff2a70", marginRight: "3px" }}>*</span> Champs obligatoires
                            </p>

                            {/* Nom et Prénom */}
                            <div className="form-field" style={{ marginBottom: "25px" }}>
                              <label style={{ display: "block", fontWeight: "600", fontSize: "14px", color: "#232323", marginBottom: "8px" }}>
                                Nom et prénom <span style={{ color: "#ff2a70" }}>*</span>
                              </label>
                              <input 
                                type="text"
                                value={formData.client_name}
                                onChange={(e) => setFormData(prev => ({ ...prev, client_name: e.target.value }))}
                                required
                                style={{ 
                                  width: "100%", 
                                  padding: "12px 16px", 
                                  borderRadius: "6px", 
                                  border: "1px solid #ddd", 
                                  fontSize: "14px", 
                                  outline: "none",
                                  boxSizing: "border-box" 
                                }}
                              />
                              <span style={{ display: "block", fontSize: "12px", color: "#888", marginTop: "5px" }}>
                                Quels sont vos nom et prénom ?
                              </span>
                            </div>

                            {/* Témoignage */}
                            <div className="form-field" style={{ marginBottom: "25px" }}>
                              <label style={{ display: "block", fontWeight: "600", fontSize: "14px", color: "#232323", marginBottom: "8px" }}>
                                Témoignage <span style={{ color: "#ff2a70" }}>*</span>
                              </label>
                              <textarea 
                                value={formData.post_content}
                                onChange={(e) => setFormData(prev => ({ ...prev, post_content: e.target.value }))}
                                required
                                rows={6}
                                style={{ 
                                  width: "100%", 
                                  padding: "12px 16px", 
                                  borderRadius: "6px", 
                                  border: "1px solid #ddd", 
                                  fontSize: "14px", 
                                  outline: "none",
                                  boxSizing: "border-box",
                                  resize: "vertical" 
                                }}
                              ></textarea>
                              <span style={{ display: "block", fontSize: "12px", color: "#888", marginTop: "5px" }}>
                                Que pensez-vous de nous ?
                              </span>
                            </div>

                            {/* Photo */}
                            <div className="form-field" style={{ marginBottom: "25px" }}>
                              <label style={{ display: "block", fontWeight: "600", fontSize: "14px", color: "#232323", marginBottom: "8px" }}>
                                Photo
                              </label>
                              <input 
                                type="file"
                                accept="image/*"
                                onChange={(e) => setFormData(prev => ({ ...prev, featured_image: e.target.files[0] }))}
                                style={{ 
                                  width: "100%", 
                                  fontSize: "14px"
                                }}
                              />
                              <span style={{ display: "block", fontSize: "12px", color: "#888", marginTop: "5px" }}>
                                Voulez-vous ajouter une photo ?
                              </span>
                            </div>

                            {/* Star Rating */}
                            <div className="form-field" style={{ marginBottom: "35px" }}>
                              <label style={{ display: "block", fontWeight: "600", fontSize: "14px", color: "#232323", marginBottom: "8px" }}>
                                Avis (Note en étoiles)
                              </label>
                              <div style={{ display: "flex", gap: "8px", alignItems: "center", minHeight: "30px" }}>
                                {[1, 2, 3, 4, 5].map((starValue) => {
                                  const isActive = starValue <= (hoverRating || formData.star_rating);
                                  return (
                                    <span 
                                      key={starValue}
                                      onClick={() => handleRatingClick(starValue)}
                                      onMouseEnter={() => setHoverRating(starValue)}
                                      onMouseLeave={() => setHoverRating(0)}
                                      style={{ 
                                        cursor: "pointer", 
                                        fontSize: "26px", 
                                        color: isActive ? "#ff2a70" : "#ddd",
                                        transition: "color 0.15s ease" 
                                      }}
                                    >
                                      ★
                                    </span>
                                  );
                                })}
                              </div>
                              <span style={{ display: "block", fontSize: "12px", color: "#888", marginTop: "5px" }}>
                                Souhaitez-vous nous laisser une note en étoiles ?
                              </span>
                            </div>

                            {/* Submit Button */}
                            <div className="form-field" style={{ textAlign: "center" }}>
                              <button 
                                type="submit" 
                                disabled={isSubmitting}
                                style={{ 
                                  backgroundColor: "#ff2a70", 
                                  color: "#fff", 
                                  padding: "14px 30px", 
                                  border: "none", 
                                  borderRadius: "6px", 
                                  fontSize: "14px", 
                                  fontWeight: "600", 
                                  textTransform: "uppercase", 
                                  cursor: isSubmitting ? "not-allowed" : "pointer", 
                                  boxShadow: "0 4px 15px rgba(255, 42, 112, 0.2)",
                                  transition: "all 0.2s ease"
                                }}
                                className="submit-btn"
                              >
                                {isSubmitting ? "Envoi en cours..." : "Ajouter un témoignage"}
                              </button>
                            </div>
                          </form>
                        )}
                      </div>
                    </div>
                  </section>

                </div>
              </div>
            </div>
          </div>
          
          <Footer />
        </div>
      </div>

      <style jsx>{`
        .submit-btn:hover {
          background-color: #e01b5a !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 42, 112, 0.3) !important;
        }
      `}</style>
    </>
  );
}
