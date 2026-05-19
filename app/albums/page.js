"use client";

import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AlbumsPage() {
  const images = [
    { src: "/assets/wp-content/uploads/2022/03/2.png", size: "col-8" },
    { src: "/assets/wp-content/uploads/2022/03/3.png", size: "col-4" },
    { src: "/assets/wp-content/uploads/2022/03/4.png", size: "col-4" },
    { src: "/assets/wp-content/uploads/2022/03/6.png", size: "col-4" },
    { src: "/assets/wp-content/uploads/2022/03/5.png", size: "col-8" },
    { src: "/assets/wp-content/uploads/2022/03/7.png", size: "col-4" }
  ];

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
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
                    <article className="post-1309 page type-page status-publish hentry" id="post-1309">
                      <header className="single-entry-header tm-hide">
                        <h2 className="entry-title">Albums</h2>
                      </header>
                      
                      <div className="entry-content">
                        <div className="elementor elementor-1309">
                          
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

                          {/* Page Title */}
                          <section className="elementor-section elementor-top-section elementor-element elementor-section-stretched tm-column-break-ipad-yes tm-col-stretched-none elementor-section-boxed elementor-section-height-default">
                            <div className="elementor-container elementor-column-gap-no">
                              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element tm-align-center elementor-widget elementor-widget-tm_heading">
                                    <div className="elementor-widget-container">
                                      <div className="tm-element-heading-content-wrapper center-align tm-reverse-heading-yes tm-seperator-none tm-content-with-desc tm-heading-style-vertical">
                                        <div className="tm-content-header">
                                          <h4 className="tm-element-subhead" style={{ color: "#ff2a70", fontWeight: "600" }}>
                                            Album
                                          </h4>
                                          <h5 className="tm-element-overlay-subhead" style={{ top: "-15px" }}>
                                            Temps Dance
                                          </h5>
                                          <h2 className="tm-element-content-heading">
                                            Les meilleurs moments saisis
                                          </h2>
                                        </div>
                                        <div className="tm-element-content-desctxt">
                                          Ainsi, pour satisfaire les amateurs de danse du monde entier et s'assurer que vous êtes toujours au courant.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          {/* Gallery Grid Section */}
                          <section className="elementor-section elementor-top-section elementor-element elementor-section-stretched tm-column-break-ipad-no tm-col-stretched-none elementor-section-boxed elementor-section-height-default" style={{ padding: "40px 0" }}>
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  
                                  {/* Custom Masonry-like Grid Layout */}
                                  <div style={{ display: "flex", flexWrap: "wrap", margin: "-10px" }}>
                                    
                                    {images.map((img, idx) => {
                                      const flexWidth = img.size === "col-8" ? "calc(66.666% - 20px)" : "calc(33.333% - 20px)";
                                      return (
                                        <div 
                                          key={idx} 
                                          className="gallery-item"
                                          style={{ 
                                            flex: `1 1 ${flexWidth}`,
                                            minWidth: "280px", 
                                            margin: "10px",
                                            boxSizing: "border-box"
                                          }}
                                        >
                                          <div 
                                            className="tm-gallerybox" 
                                            style={{ 
                                              position: "relative", 
                                              overflow: "hidden", 
                                              borderRadius: "8px", 
                                              boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                                              cursor: "pointer"
                                            }}
                                            onClick={() => openLightbox(idx)}
                                          >
                                            <div className="tm-box-image" style={{ position: "relative" }}>
                                              <div className="tm-gallery-image" style={{ position: "relative", overflow: "hidden" }}>
                                                <img 
                                                  alt={`Gallery Image ${idx + 1}`} 
                                                  src={img.src} 
                                                  style={{ 
                                                    width: "100%", 
                                                    height: "auto", 
                                                    display: "block", 
                                                    transition: "transform 0.4s ease"
                                                  }}
                                                  className="zoom-hover"
                                                />
                                                <div 
                                                  style={{ 
                                                    position: "absolute", 
                                                    top: 0, 
                                                    left: 0, 
                                                    width: "100%", 
                                                    height: "100%", 
                                                    backgroundColor: "rgba(255,42,112,0.85)", 
                                                    display: "flex", 
                                                    alignItems: "center", 
                                                    justifyContent: "center",
                                                    opacity: 0,
                                                    transition: "opacity 0.3s ease",
                                                    zIndex: 2
                                                  }}
                                                  className="overlay-hover"
                                                >
                                                  <i 
                                                    className="fas fa-search" 
                                                    style={{ 
                                                      color: "#fff", 
                                                      fontSize: "24px", 
                                                      transform: "scale(0.8)", 
                                                      transition: "transform 0.3s ease" 
                                                    }}
                                                    className="icon-hover"
                                                  ></i>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    })}

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

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          onClick={closeLightbox}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999999,
            cursor: "zoom-out"
          }}
        >
          <button 
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "30px",
              cursor: "pointer",
              zIndex: 1000000
            }}
          >
            &times;
          </button>

          <button 
            onClick={showPrev}
            style={{
              position: "absolute",
              left: "20px",
              background: "rgba(0,0,0,0.5)",
              border: "none",
              color: "#fff",
              fontSize: "24px",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              cursor: "pointer",
              zIndex: 1000000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            &#10094;
          </button>

          <img 
            src={images[lightboxIndex].src} 
            alt="Enlarged gallery view"
            style={{
              maxHeight: "85vh",
              maxWidth: "85vw",
              objectFit: "contain",
              cursor: "default",
              boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
              borderRadius: "4px"
            }}
            onClick={(e) => e.stopPropagation()}
          />

          <button 
            onClick={showNext}
            style={{
              position: "absolute",
              right: "20px",
              background: "rgba(0,0,0,0.5)",
              border: "none",
              color: "#fff",
              fontSize: "24px",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              cursor: "pointer",
              zIndex: 1000000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            &#10095;
          </button>
        </div>
      )}

      {/* Hover effects style override */}
      <style jsx global>{`
        .tm-gallerybox:hover .zoom-hover {
          transform: scale(1.05);
        }
        .tm-gallerybox:hover .overlay-hover {
          opacity: 1 !important;
        }
        .tm-gallerybox:hover .icon-hover {
          transform: scale(1) !important;
        }
      `}</style>
    </>
  );
}
