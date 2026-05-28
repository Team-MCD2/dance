"use client";

import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AlbumsPage() {
  // Album photos (original 6 only)
  const images = [
    { src: "/assets/wp-content/uploads/2022/03/2.png", alt: "Temps Dance - Spectacle 1" },
    { src: "/assets/wp-content/uploads/2022/03/3.png", alt: "Temps Dance - Spectacle 2" },
    { src: "/assets/wp-content/uploads/2022/03/4.png", alt: "Temps Dance - Cours de danse" },
    { src: "/assets/wp-content/uploads/2022/03/6.png", alt: "Temps Dance - Répétition" },
    { src: "/assets/wp-content/uploads/2022/03/5.png", alt: "Temps Dance - Événement" },
    { src: "/assets/wp-content/uploads/2022/03/7.png", alt: "Temps Dance - Showcase" },
  ];

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showNext = (e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev + 1) % images.length); };
  const showPrev = (e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev - 1 + images.length) % images.length); };

  return (
    <>
      <div id="tm-home"></div>
      <div className="main-holder">
        <div id="page" className="hfeed site">
          <Header />

          <div className="site-content-wrapper" id="content-wrapper">
            <div className="site-content" id="content">

              <div className="site-content-inner" id="content-inner">
                <div className="content-area" id="primary" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
                  <main className="site-main" id="main">
                    <article className="post-1309 page type-page status-publish hentry" id="post-1309">
                      <header className="single-entry-header tm-hide">
                        <h2 className="entry-title">Albums</h2>
                      </header>

                      <div className="entry-content">
                        <div className="elementor elementor-1309">

                          {/* Page Title */}
                          <section className="full-width-bg" style={{ 
                            padding: '80px 0 100px', 
                            textAlign: 'center', 
                            backgroundColor: '#ededed', 
                            backgroundImage: 'url("/assets/wp-content/themes/jassio/images/volum-bg.png")', 
                            backgroundRepeat: 'repeat', 
                            backgroundPosition: 'center center' 
                          }}>
                            <div className="tm-element-heading-content-wrapper center-align tm-reverse-heading-yes tm-seperator-none tm-content-with-desc tm-heading-style-vertical">
                              <div className="tm-content-header">
                                <h4 className="tm-element-subhead" style={{ color: '#ff2a70', fontWeight: '600' }}>
                                  Album
                                </h4>
                                <h5 className="tm-element-overlay-subhead" style={{ top: '-15px' }}>
                                  Temps Dance
                                </h5>
                                <h2 className="tm-element-content-heading">
                                  Les meilleurs moments saisis
                                </h2>
                              </div>
                              <div className="tm-element-content-desctxt" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '22px', fontWeight: '500', lineHeight: '1.6', color: '#555' }}>
                                Ainsi, pour satisfaire les amateurs de danse du monde entier et s'assurer que vous êtes toujours au courant des meilleurs moments de Temps Dance.
                              </div>
                            </div>
                          </section>

                          {/* Masonry CSS Grid Gallery */}
                          <section style={{ padding: '0 0 10px' }}>
                            <div className="album-grid">
                              {images.map((img, idx) => (
                                <div
                                  key={idx}
                                  className="album-grid-item"
                                  onClick={() => openLightbox(idx)}
                                  title={img.alt}
                                >
                                  <img
                                    src={img.src}
                                    alt={img.alt}
                                    loading="lazy"
                                  />
                                  <div className="album-overlay">
                                    <span className="album-overlay-icon">
                                      <i className="fas fa-search-plus"></i>
                                    </span>
                                  </div>
                                </div>
                              ))}
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
        <div className="album-lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Fermer">
            &times;
          </button>
          <button className="lightbox-prev" onClick={showPrev} aria-label="Précédent">
            &#10094;
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
            />
            <div className="lightbox-caption">
              {images[lightboxIndex].alt} — {lightboxIndex + 1} / {images.length}
            </div>
          </div>
          <button className="lightbox-next" onClick={showNext} aria-label="Suivant">
            &#10095;
          </button>
        </div>
      )}

      <style>{`
        /* ---- ALBUM GRID (6 colonnes, placement explicite, 0 espace vide) ---- */
        .album-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-template-rows: 155px 155px 280px;
          gap: 10px;
        }

        /* Photo 1 — grande (2/3 larg, hauteur double) */
        .album-grid-item:nth-child(1) {
          grid-column: 1 / 5;
          grid-row: 1 / 3;
        }

        /* Photo 2 — droite haut (1/3 larg) */
        .album-grid-item:nth-child(2) {
          grid-column: 5 / 7;
          grid-row: 1;
        }

        /* Photo 3 — droite bas (1/3 larg) */
        .album-grid-item:nth-child(3) {
          grid-column: 5 / 7;
          grid-row: 2;
        }

        /* Photos 4, 5, 6 — rangée du bas, 3 égales (1/3 chacune) */
        .album-grid-item:nth-child(4) {
          grid-column: 1 / 3;
          grid-row: 3;
        }

        .album-grid-item:nth-child(5) {
          grid-column: 3 / 5;
          grid-row: 3;
        }

        .album-grid-item:nth-child(6) {
          grid-column: 5 / 7;
          grid-row: 3;
        }

        /* Style commun des items */
        .album-grid-item {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          cursor: pointer;
          background: #111;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        .album-grid-item:hover {
          box-shadow: 0 12px 30px rgba(0,0,0,0.18);
          transform: translateY(-2px);
        }

        .album-grid-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .album-grid-item:hover img {
          transform: scale(1.06);
        }

        /* Overlay rose au survol */
        .album-overlay {
          position: absolute;
          inset: 0;
          background: rgba(255, 42, 112, 0.72);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .album-grid-item:hover .album-overlay {
          opacity: 1;
        }

        .album-overlay-icon {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: rgba(255,255,255,0.22);
          border: 2px solid rgba(255,255,255,0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(0.7);
          transition: transform 0.3s ease;
        }

        .album-grid-item:hover .album-overlay-icon {
          transform: scale(1);
        }

        .album-overlay-icon i {
          color: #fff;
          font-size: 20px;
        }

        /* ---- RESPONSIVE ---- */
        @media (max-width: 900px) {
          .album-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 260px 200px 200px 200px;
          }
          .album-grid-item:nth-child(1) { grid-column: 1 / 3; grid-row: 1; }
          .album-grid-item:nth-child(2) { grid-column: 1; grid-row: 2; }
          .album-grid-item:nth-child(3) { grid-column: 2; grid-row: 2; }
          .album-grid-item:nth-child(4) { grid-column: 1; grid-row: 3; }
          .album-grid-item:nth-child(5) { grid-column: 2; grid-row: 3; }
          .album-grid-item:nth-child(6) { grid-column: 1 / 3; grid-row: 4; }
        }

        @media (max-width: 560px) {
          .album-grid {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(6, 220px);
          }
          .album-grid-item:nth-child(1) { grid-column: 1; grid-row: 1; }
          .album-grid-item:nth-child(2) { grid-column: 1; grid-row: 2; }
          .album-grid-item:nth-child(3) { grid-column: 1; grid-row: 3; }
          .album-grid-item:nth-child(4) { grid-column: 1; grid-row: 4; }
          .album-grid-item:nth-child(5) { grid-column: 1; grid-row: 5; }
          .album-grid-item:nth-child(6) { grid-column: 1; grid-row: 6; }
        }

        /* ---- LIGHTBOX ---- */
        .album-lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999999;
          cursor: zoom-out;
          padding: 20px;
        }

        .lightbox-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-height: 90vh;
          cursor: default;
        }

        .lightbox-content img {
          max-height: 80vh;
          max-width: 80vw;
          object-fit: contain;
          border-radius: 6px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }

        .lightbox-caption {
          color: rgba(255,255,255,0.6);
          font-size: 13px;
          margin-top: 14px;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.3px;
        }

        .lightbox-close {
          position: fixed;
          top: 20px;
          right: 24px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          font-size: 26px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          z-index: 1000000;
          line-height: 1;
        }

        .lightbox-close:hover {
          background: rgba(255,42,112,0.6);
          border-color: transparent;
        }

        .lightbox-prev,
        .lightbox-next {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          font-size: 20px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          z-index: 1000000;
        }

        .lightbox-prev { left: 20px; }
        .lightbox-next { right: 20px; }

        .lightbox-prev:hover,
        .lightbox-next:hover {
          background: rgba(255,42,112,0.6);
          border-color: transparent;
        }
      `}</style>
    </>
  );
}
