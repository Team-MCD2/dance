"use client";

import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'rs-5',
      bg: 'https://tempsdance.fr/wp-content/uploads/2022/03/young-sportive-man-daancing-breakdance-isolared-over-black-backgrounf-in-neon-with-mixed-lights-aggrandi-scaled.jpg',
      subtitle1: 'Venez Découvrir Notre',
      subtitle2: 'Studio De Danse',
      title: 'Temps Dance',
      link1: '/nos-cours-2',
      link2: '/les-professeurs'
    },
    {
      id: 'rs-6',
      bg: 'https://tempsdance.fr/wp-content/uploads/2022/03/man-and-woman-dancing-salsa-noir-scaled.jpg',
      subtitle1: 'Dance',
      subtitle2: 'Express Yourself',
      title: '',
      link1: '/nos-cours-2',
      link2: '/les-professeurs'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div id="tm-home"></div>
      <div className="main-holder">
        <div id="page" className="hfeed site">
          <Header />
          
      {/* Hero Slider Section */}
      <div className="themetechmount-slider-wrapper">
        <div className="themetechmount-slider-wide">
          <div id="rev_slider_3_1_forcefullwidth" style={{ marginTop: "0px", marginBottom: "0px" }}>
            <div id="rev_slider_3_1_wrapper" data-source="gallery" style={{ visibility: "visible", background: "transparent", padding: "0px", margin: "0px auto", display: "block", width: "100%", position: "relative", overflow: "hidden" }}>
              <div id="rev_slider_3_1" style={{ width: "100%", height: "100%", position: "relative" }} className="revslider-initialised rev_redraw_on_blurfocus">
                
                {/* Left Arrow */}
                <div 
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                  style={{ opacity: 0.8, top: "50%", left: "20px", transform: "translateY(-50%)", zIndex: 30, cursor: "pointer", position: "absolute", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.5)", borderRadius: "50%", color: "#fff" }} 
                  className="tp-leftarrow tparrows uranus"
                >
                  <i className="tm-jassio-icon-left-open-big" style={{ fontSize: "20px" }}></i>
                </div>

                {/* Right Arrow */}
                <div 
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                  style={{ opacity: 0.8, top: "50%", right: "20px", transform: "translateY(-50%)", zIndex: 30, cursor: "pointer", position: "absolute", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.5)", borderRadius: "50%", color: "#fff" }} 
                  className="tp-rightarrow tparrows uranus"
                >
                  <i className="tm-jassio-icon-right-open-big" style={{ fontSize: "20px" }}></i>
                </div>

                <div style={{ visibility: "hidden" }}>
                  <div className="div-bar" style={{ background: "rgba(255, 255, 255, 0.5)", transformOrigin: "0% 50%", transform: "translate3d(0px, 0px, 0px) scale(0.1014, 1)" }}></div>
                </div>

                <div style={{ visibility: "visible", maxHeight: "none", height: "100%", width: "100%", overflow: "hidden", position: "relative", minHeight: "450px" }}>
                  {slides.map((slide, index) => {
                    const isActive = index === currentSlide;
                    return (
                      <div 
                        key={slide.id}
                        style={{
                          position: "absolute",
                          overflow: "hidden",
                          height: "100%",
                          width: "100%",
                          zIndex: isActive ? 20 : 10,
                          opacity: isActive ? 1 : 0,
                          visibility: isActive ? "inherit" : "hidden",
                          transition: "opacity 1s ease-in-out",
                          top: 0,
                          left: 0
                        }}
                      >
                        {/* Background Image */}
                        <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}>
                          <img 
                            src={slide.bg} 
                            alt={slide.title || slide.subtitle1} 
                            style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }} 
                          />
                          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.4)" }}></div>
                        </div>

                        {/* Slide Content Container */}
                        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 25, padding: "20px", textAlign: "center" }}>
                          <div style={{ fontFamily: "Oswald", color: "#ffffff", fontWeight: 700, fontSize: "clamp(24px, 4vw, 40px)", lineHeight: "1.2", marginBottom: "10px", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                            {slide.subtitle1}
                          </div>
                          
                          <div style={{ fontFamily: "Oswald", color: "#ffffff", fontWeight: 700, fontSize: "clamp(24px, 4vw, 40px)", lineHeight: "1.2", marginBottom: slide.title ? "10px" : "30px", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                            {slide.subtitle2}
                          </div>

                          {slide.title && (
                            <div className="tm-danceslider-text" style={{ fontFamily: "Roboto", color: "#ff2a70", fontWeight: 400, fontSize: "clamp(36px, 6vw, 65px)", lineHeight: "1.2", marginBottom: "30px", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                              {slide.title}
                            </div>
                          )}

                          {/* Buttons */}
                          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
                            <a 
                              className="tm-slider-button" 
                              href={slide.link1} 
                              style={{ backgroundColor: "#ff2a70", color: "#ffffff", fontFamily: "Oswald", fontWeight: 500, fontSize: "14px", padding: "12px 30px", borderRadius: "6px", textDecoration: "none", letterSpacing: "1px", display: "inline-flex", alignItems: "center", transition: "background-color 0.3s" }}
                            >
                              NOS COURS <i className="tm-jassio-icon-right-thin" style={{ marginLeft: "5px" }}></i>
                            </a>
                            <a 
                              className="tm-slider-button" 
                              href={slide.link2} 
                              style={{ backgroundColor: "transparent", color: "#ffffff", fontFamily: "Oswald", fontWeight: 500, fontSize: "14px", padding: "12px 30px", borderRadius: "6px", textDecoration: "none", letterSpacing: "1px", border: "1px solid #ffffff", display: "inline-flex", alignItems: "center", transition: "all 0.3s" }}
                            >
                              NOS PROFESSEURS <i className="tm-jassio-icon-right-thin" style={{ marginLeft: "5px" }}></i>
                            </a>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="content-wrapper" className="site-content-wrapper">
        <div id="content" className="site-content">
          <div id="content-inner" className="site-content-inner">
            <div id="primary" className="content-area container">
              <main id="main" className="site-main">
                <article id="post-249" className="post-249 page type-page status-publish hentry">
                  
                  <header className="single-entry-header tm-hide">
                    <h2 className="entry-title">Accueil</h2>
                  </header>

                  <div className="entry-content">
                    <div data-elementor-type="wp-page" data-elementor-id="249" className="elementor elementor-249" data-elementor-post-type="page">
                      
                      {/* Spacer Section */}
                      <section className="elementor-section elementor-top-section elementor-element elementor-element-7ae1ecc elementor-section-full_width elementor-section-stretched tm-column-break-ipad-yes tm-col-stretched-none elementor-section-height-default elementor-section-height-default tm-bgimage-no tm-bgcolor-yes" data-id="7ae1ecc" data-element_type="section">
                        <div className="elementor-container elementor-column-gap-no">
                          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6b1a69f tm-bgimage-no tm-bgcolor-yes" data-id="6b1a69f" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-59d9729 elementor-widget elementor-widget-spacer" data-id="59d9729" data-element_type="widget" data-widget_type="spacer.default">
                                <div className="elementor-widget-container">
                                  <div className="elementor-spacer">
                                    <div className="elementor-spacer-inner"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      {/* About Section */}
                      <section className="elementor-section elementor-top-section elementor-element elementor-element-c19e8d7 tm-column-break-ipad-yes elementor-section-stretched tm-col-stretched-none elementor-section-boxed elementor-section-height-default elementor-section-height-default tm-bgimage-no tm-bgcolor-yes" data-id="c19e8d7" data-element_type="section">
                        <div className="elementor-container elementor-column-gap-no">
                          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4eea6a3 tm-bgimage-no tm-bgcolor-yes" data-id="4eea6a3" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-4ee5ccd tm-border-img1 elementor-widget elementor-widget-image" data-id="4ee5ccd" data-element_type="widget" data-widget_type="image.default">
                                <div className="elementor-widget-container">
                                  <img decoding="async" width="429" height="522" src="/assets/left-img-01.png" className="attachment-full size-full wp-image-1160" alt="À Propos de nous" data-id="1160" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-8497ba1 tm-bgimage-no tm-bgcolor-yes" data-id="8497ba1" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-7d778ab tm-align-left elementor-widget elementor-widget-tm_heading" data-id="7d778ab" data-element_type="widget" data-widget_type="tm_heading.default">
                                <div className="elementor-widget-container">
                                  <div className="tm-element-heading-content-wrapper left-align tm-reverse-heading-yes tm-seperator-solid tm-content-with-desc tm-heading-style-vertical">
                                    <div className="tm-content-header">
                                      <h4 className="tm-element-subhead">À Propos de nous</h4>
                                      <h5 className="tm-element-overlay-subhead">À Propos De Nous</h5>
                                      <h2 className="tm-element-content-heading">Ensemble, nous avons créé un modèle académique flexible</h2>
                                    </div>
                                    <div className="tm-element-content-desctxt">
                                      Chez TempsDance, vous adorerez l'ambiance familiale de notre studio de danse. Où l'assistance les uns les autres et faire en sorte que chaque danseur et sa famille se sentent les bienvenus. Vous serez heureux de savoir que vous serez encadrés avec passion et professionnalisme.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-section elementor-inner-section elementor-element elementor-element-e29d155 tm-column-break-ipad-no tm-col-stretched-none elementor-section-boxed elementor-section-height-default elementor-section-height-default tm-bgimage-no tm-bgcolor-yes" data-id="e29d155" data-element_type="section">
                                <div className="elementor-container elementor-column-gap-no">
                                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-48a3be2 tm-bgimage-no tm-bgcolor-yes" data-id="48a3be2" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div className="elementor-element elementor-element-6b697f8 tm-btn-shape-rounded elementor-align-left tm-btn-color-skincolor tm-btn-style-flat elementor-widget elementor-widget-button" data-id="6b697f8" data-element_type="widget" data-widget_type="button.default">
                                        <div className="elementor-widget-container">
                                          <div className="elementor-button-wrapper">
                                            <a className="elementor-button elementor-button-link elementor-size-md" href="/faq">
                                              <span className="elementor-button-content-wrapper">
                                                <span className="elementor-button-icon"><i aria-hidden="true" className="fas fa-long-arrow-alt-right"></i></span>
                                                <span className="elementor-button-text">En savoir plus</span>
                                              </span>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-fc1a4db tm-bgimage-no tm-bgcolor-yes" data-id="fc1a4db" data-element_type="column">
                                    <div className="elementor-widget-wrap"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      {/* News Section 1 */}
                      <section className="elementor-section elementor-top-section elementor-element elementor-element-1091b71 tm-column-break-ipad-yes elementor-section-stretched tm-col-stretched-none elementor-section-boxed elementor-section-height-default elementor-section-height-default tm-bgimage-no tm-bgcolor-yes" data-id="1091b71" data-element_type="section">
                        <div className="elementor-container elementor-column-gap-no">
                          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7a664f8 tm-bgimage-no tm-bgcolor-yes" data-id="7a664f8" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-9104b07 tm-align-center elementor-widget elementor-widget-tm_heading" data-id="9104b07" data-element_type="widget" data-widget_type="tm_heading.default">
                                <div className="elementor-widget-container">
                                  <div className="tm-element-heading-content-wrapper center-align tm-reverse-heading-yes tm-seperator-solid tm-heading-style-vertical">
                                    <div className="tm-content-header">
                                      <h4 className="tm-element-subhead">Actualité</h4>
                                      <h5 className="tm-element-overlay-subhead">Actualité</h5>
                                      <h2 className="tm-element-content-heading">Informations fin d'année</h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-bc322da elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-text-editor" data-id="bc322da" data-element_type="widget" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                  <p><strong>Les inscriptions auront lieu à l’école de danse le week-end du 21-22 juin de 10h à 13h et 14h à 18h, ainsi que le mercredi 10 septembre de 14h à 18h.</strong></p>
                                  <p><strong>La rentrée et les cours d’essais s’effectueront la semaine du 15-20 Septembre 2025 sur inscription.</strong></p>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-d7f1a35 elementor-widget elementor-widget-text-editor" data-id="d7f1a35" data-element_type="widget" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                  <p><strong>Inscriptions saison 2026-2027</strong><br /><strong>Samedi 27 et dimanche 28 juin à l’école de danse </strong><br /><strong>10h-13h et 14h-18h</strong></p>
                                  <p><strong>Le planning arrive bientôt ainsi que les fiches pour la nouvelle saison.</strong></p>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-9b5ac0f tm-btn-shape-rounded elementor-align-center tm-btn-color-skincolor tm-btn-style-flat elementor-widget elementor-widget-button" data-id="9b5ac0f" data-element_type="widget" data-widget_type="button.default">
                                <div className="elementor-widget-container">
                                  <div className="elementor-button-wrapper">
                                    <a className="elementor-button elementor-button-link elementor-size-md" href="/planning-tarifs">
                                      <span className="elementor-button-content-wrapper">
                                        <span className="elementor-button-icon"><i aria-hidden="true" className="fas fa-long-arrow-alt-right"></i></span>
                                        <span className="elementor-button-text">FICHE INSCRIPTION</span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-a5a2605 elementor-widget elementor-widget-spacer" data-id="a5a2605" data-element_type="widget" data-widget_type="spacer.default">
                                <div className="elementor-widget-container">
                                  <div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      {/* News Section 2 (Hidden/Archive) */}
                      <section className="elementor-section elementor-top-section elementor-element elementor-element-fe647d9 tm-column-break-ipad-yes elementor-section-stretched elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile tm-col-stretched-none elementor-section-boxed elementor-section-height-default elementor-section-height-default tm-bgimage-no tm-bgcolor-yes" data-id="fe647d9" data-element_type="section">
                        <div className="elementor-container elementor-column-gap-no">
                          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-278fa3c tm-bgimage-no tm-bgcolor-yes" data-id="278fa3c" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-31fea9d tm-align-center elementor-widget elementor-widget-tm_heading" data-id="31fea9d" data-element_type="widget" data-widget_type="tm_heading.default">
                                <div className="elementor-widget-container">
                                  <div className="tm-element-heading-content-wrapper center-align tm-reverse-heading-yes tm-seperator-solid tm-heading-style-vertical">
                                    <div className="tm-content-header">
                                      <h4 className="tm-element-subhead">Actualité</h4>
                                      <h5 className="tm-element-overlay-subhead">Actualité</h5>
                                      <h2 className="tm-element-content-heading">Informations fin d'année</h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-99f3311 elementor-widget elementor-widget-text-editor" data-id="99f3311" data-element_type="widget" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                  <p><strong>Les inscriptions auront lieu le Samedi 1 Juillet et le Dimanche 2 Juillet de 10h00 à 18h00 à l’école de danse. </strong></p>
                                  <p><strong>La rentrée et les cours d’essais s’effectueront la semaine du 18 Septembre 2023.</strong></p>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-9c7f7a6 tm-btn-shape-rounded elementor-align-center tm-btn-color-skincolor tm-btn-style-flat elementor-widget elementor-widget-button" data-id="9c7f7a6" data-element_type="widget" data-widget_type="button.default">
                                <div className="elementor-widget-container">
                                  <div className="elementor-button-wrapper">
                                    <a className="elementor-button elementor-button-link elementor-size-md" href="/planning-tarifs">
                                      <span className="elementor-button-content-wrapper">
                                        <span className="elementor-button-icon"><i aria-hidden="true" className="fas fa-long-arrow-alt-right"></i></span>
                                        <span className="elementor-button-text">FICHE INSCRIPTION</span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-ec9a45d elementor-widget elementor-widget-spacer" data-id="ec9a45d" data-element_type="widget" data-widget_type="spacer.default">
                                <div className="elementor-widget-container">
                                  <div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-d821895 elementor-widget elementor-widget-text-editor" data-id="d821895" data-element_type="widget" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                  <p>Le<strong> spectacle de danse</strong> aura lieu le <strong>22 Juin 2022 à 20h00 au phare à Tournefeuille</strong>.<br />Vous pourrez acheter les places le Samedi 4 Juin à l’école de 9h30 à 18h00 et le Mercredi 8 Juin de 13h00 à 17h30.</p>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-ae4b9f3 tm-btn-shape-rounded elementor-align-center tm-btn-color-skincolor tm-btn-style-flat elementor-widget elementor-widget-button" data-id="ae4b9f3" data-element_type="widget" data-widget_type="button.default">
                                <div className="elementor-widget-container">
                                  <div className="elementor-button-wrapper">
                                    <a className="elementor-button elementor-button-link elementor-size-md" href="https://www.youtube.com/channel/UCh42PNfDf0abcZDzb0wzJeQ" target="_blank" rel="noopener noreferrer">
                                      <span className="elementor-button-content-wrapper">
                                        <span className="elementor-button-icon"><i aria-hidden="true" className="fas fa-long-arrow-alt-right"></i></span>
                                        <span className="elementor-button-text">voir NOS VIDéOS</span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-da59875 elementor-widget elementor-widget-spacer" data-id="da59875" data-element_type="widget" data-widget_type="spacer.default">
                                <div className="elementor-widget-container">
                                  <div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-9713e5c elementor-widget elementor-widget-text-editor" data-id="9713e5c" data-element_type="widget" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                  <p>La semaine de stage d’été aura lieu du 4 au 8 Juillet 2023.</p>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-156a12b tm-btn-shape-rounded elementor-align-center tm-btn-color-skincolor tm-btn-style-flat elementor-widget elementor-widget-button" data-id="156a12b" data-element_type="widget" data-widget_type="button.default">
                                <div className="elementor-widget-container">
                                  <div className="elementor-button-wrapper">
                                    <a className="elementor-button elementor-button-link elementor-size-md" href="https://tempsdance.fr/wp-content/uploads/2022/06/stage-eěteě-2022.pdf" target="_blank" rel="noopener noreferrer">
                                      <span className="elementor-button-content-wrapper">
                                        <span className="elementor-button-icon"><i aria-hidden="true" className="fas fa-long-arrow-alt-right"></i></span>
                                        <span className="elementor-button-text">Planning Stage</span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-section elementor-inner-section elementor-element elementor-element-ebac36d tm-column-break-ipad-no tm-col-stretched-none elementor-section-boxed elementor-section-height-default elementor-section-height-default tm-bgimage-no tm-bgcolor-yes" data-id="ebac36d" data-element_type="section">
                                <div className="elementor-container elementor-column-gap-no">
                                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-5218455 tm-bgimage-no tm-bgcolor-yes" data-id="5218455" data-element_type="column">
                                    <div className="elementor-widget-wrap"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      {/* Courses Section */}
                      <section className="elementor-section elementor-top-section elementor-element elementor-element-2650f07 tm-column-break-ipad-no tm-col-stretched-none elementor-section-boxed elementor-section-height-default elementor-section-height-default tm-bgimage-no tm-bgcolor-yes" data-id="2650f07" data-element_type="section">
                        <div className="elementor-container elementor-column-gap-default">
                          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-468bab3 tm-bgimage-no tm-bgcolor-yes" data-id="468bab3" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-section elementor-inner-section elementor-element elementor-element-c04abab tm-column-break-ipad-no tm-col-stretched-none elementor-section-boxed elementor-section-height-default elementor-section-height-default tm-bgimage-no tm-bgcolor-yes" data-id="c04abab" data-element_type="section">
                                <div className="elementor-container elementor-column-gap-default">
                                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-9d9f2ab tm-bgimage-no tm-bgcolor-yes" data-id="9d9f2ab" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div className="elementor-element elementor-element-35a7ecd elementor-widget elementor-widget-menu-anchor" data-id="35a7ecd" data-element_type="widget" data-widget_type="menu-anchor.default">
                                        <div className="elementor-widget-container">
                                          <div className="elementor-menu-anchor" id="Sommaire"></div>
                                        </div>
                                      </div>
                                      <div className="elementor-element elementor-element-2b74130 elementor-widget elementor-widget-spacer" data-id="2b74130" data-element_type="widget" data-widget_type="spacer.default">
                                        <div className="elementor-widget-container">
                                          <div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div>
                                        </div>
                                      </div>
                                      <div className="elementor-element elementor-element-6b2acce tm-align-center elementor-widget elementor-widget-tm_heading" data-id="6b2acce" data-element_type="widget" data-widget_type="tm_heading.default">
                                        <div className="elementor-widget-container">
                                          <div className="tm-element-heading-content-wrapper center-align tm-reverse-heading-yes tm-seperator-none tm-heading-style-vertical">
                                            <div className="tm-content-header">
                                              <h4 className="tm-element-subhead">Présentation</h4>
                                              <h5 className="tm-element-overlay-subhead">Temps Dance</h5>
                                              <h2 className="tm-element-content-heading">Nos cours</h2>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Row 1 */}
                              <div className="elementor-section elementor-inner-section elementor-element elementor-element-d914a73 tm-column-break-ipad-no tm-col-stretched-none elementor-section-boxed elementor-section-height-default elementor-section-height-default tm-bgimage-no tm-bgcolor-yes" data-id="d914a73" data-element_type="section">
                                <div className="elementor-container elementor-column-gap-no">
                                  <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-ee2dde5 tm-bgimage-no tm-bgcolor-yes" data-id="ee2dde5" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div className="elementor-element elementor-element-092c729 elementor-widget elementor-widget-tm_icon_heading" data-id="092c729" data-element_type="widget" data-widget_type="tm_icon_heading.default">
                                        <div className="elementor-widget-container">
                                          <div className="themetechmount-iconbox themetechmount-iconbox-styleone themetechmount-iconcolor-white themetechmount-icon-bgcolor-skincolor tm-iconstyle-rounded tm-textalign-center">
                                            <div className="themetechmount-iconbox-inner">
                                              <div className="tm-iconbox-wrapper">
                                                <div className="themetechmount-iconbox-icon">
                                                  <div className="tm-box-icon"><i className="kw_jassio flaticon-tap-dance"></i></div>
                                                </div>
                                                <div className="themetechmount-iconbox-heading">
                                                  <h2 className="tm-custom-heading">Jazz Cabaret</h2>
                                                  <div className="tm-cta3-content-wrapper">À partir de 16 ans</div>
                                                  <div className="tm-iocnbox-btn"><a href="/nos-cours-2#Jazz"><span>En savoir plus</span></a></div>
                                                </div>	
                                              </div>
                                            </div>	
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-17eef58 tm-bgimage-no bg-yes" data-id="17eef58" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div className="elementor-element elementor-element-80ccf83 elementor-widget elementor-widget-tm_icon_heading" data-id="80ccf83" data-element_type="widget" data-widget_type="tm_icon_heading.default">
                                        <div className="elementor-widget-container">
                                          <div className="themetechmount-iconbox themetechmount-iconbox-styleone themetechmount-iconcolor-white themetechmount-icon-bgcolor-skincolor tm-iconstyle-rounded tm-textalign-center">
                                            <div className="themetechmount-iconbox-inner">
                                              <div className="tm-iconbox-wrapper">
                                                <div className="themetechmount-iconbox-icon">
                                                  <div className="tm-box-icon"><i className="kw_jassio flaticon-dancing"></i></div>
                                                </div>
                                                <div className="themetechmount-iconbox-heading">
                                                  <h2 className="tm-custom-heading">Contemporain</h2>
                                                  <div className="tm-cta3-content-wrapper">À partir de 12 ans</div>
                                                  <div className="tm-iocnbox-btn"><a href="/nos-cours-2#CONTEMPORAIN2"><span>En savoir plus</span></a></div>
                                                </div>	
                                              </div>
                                            </div>	
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-0b97828 tm-bgimage-no tm-bgcolor-yes" data-id="0b97828" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div className="elementor-element elementor-element-ff83c50 elementor-widget elementor-widget-tm_icon_heading" data-id="ff83c50" data-element_type="widget" data-widget_type="tm_icon_heading.default">
                                        <div className="elementor-widget-container">
                                          <div className="themetechmount-iconbox themetechmount-iconbox-styleone themetechmount-iconcolor-white themetechmount-icon-bgcolor-skincolor tm-iconstyle-rounded tm-textalign-center">
                                            <div className="themetechmount-iconbox-inner">
                                              <div className="tm-iconbox-wrapper">
                                                <div className="themetechmount-iconbox-icon">
                                                  <div className="tm-box-icon"><i className="kw_jassio flaticon-dancing-3"></i></div>
                                                </div>
                                                <div className="themetechmount-iconbox-heading">
                                                  <h2 className="tm-custom-heading">Break Dance</h2>
                                                  <div className="tm-cta3-content-wrapper">À partir de 6 ans</div>
                                                  <div className="tm-iocnbox-btn"><a href="/nos-cours-2#BREAK"><span>En savoir plus</span></a></div>
                                                </div>	
                                              </div>
                                            </div>	
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-5bd0928 tm-bgimage-no tm-bgcolor-yes" data-id="5bd0928" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div className="elementor-element elementor-element-f47be59 elementor-widget elementor-widget-tm_icon_heading" data-id="f47be59" data-element_type="widget" data-widget_type="tm_icon_heading.default">
                                        <div className="elementor-widget-container">
                                          <div className="themetechmount-iconbox themetechmount-iconbox-styleone themetechmount-iconcolor-white themetechmount-icon-bgcolor-skincolor tm-iconstyle-rounded tm-textalign-center">
                                            <div className="themetechmount-iconbox-inner">
                                              <div className="tm-iconbox-wrapper">
                                                <div className="themetechmount-iconbox-icon">
                                                  <div className="tm-box-icon"><i className="kw_jassio flaticon-dancing-4"></i></div>
                                                </div>
                                                <div className="themetechmount-iconbox-heading">
                                                  <h2 className="tm-custom-heading">Afro Kid's</h2>
                                                  <div className="tm-cta3-content-wrapper">À partir de 4 ans</div>
                                                  <div className="tm-iocnbox-btn"><a href="/nos-cours-2#Zumba"><span>En savoir plus</span></a></div>
                                                </div>	
                                              </div>
                                            </div>	
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Row 2 */}
                              <div className="elementor-section elementor-inner-section elementor-element elementor-element-3f9fc69 tm-column-break-ipad-no tm-col-stretched-none elementor-section-boxed elementor-section-height-default elementor-section-height-default tm-bgimage-no tm-bgcolor-yes" data-id="3f9fc69" data-element_type="section">
                                <div className="elementor-container elementor-column-gap-no">
                                  <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-ce47c34 tm-bgimage-no tm-bgcolor-yes" data-id="ce47c34" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div className="elementor-element elementor-element-4f73ed7 elementor-widget elementor-widget-tm_icon_heading" data-id="4f73ed7" data-element_type="widget" data-widget_type="tm_icon_heading.default">
                                        <div className="elementor-widget-container">
                                          <div className="themetechmount-iconbox themetechmount-iconbox-styleone themetechmount-iconcolor-white themetechmount-icon-bgcolor-skincolor tm-iconstyle-rounded tm-textalign-center">
                                            <div className="themetechmount-iconbox-inner">
                                              <div className="tm-iconbox-wrapper">
                                                <div className="themetechmount-iconbox-icon">
                                                  <div className="tm-box-icon"><i className="kw_jassio flaticon-dancing-1"></i></div>
                                                </div>
                                                <div className="themetechmount-iconbox-heading">
                                                  <h2 className="tm-custom-heading">Hip-Hop (Commercial)</h2>
                                                  <div className="tm-cta3-content-wrapper">À partir de 8 ans</div>
                                                  <div className="tm-iocnbox-btn"><a href="/nos-cours-2#HIPHOP"><span>En savoir plus</span></a></div>
                                                </div>	
                                              </div>
                                            </div>	
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-5d6b3fb tm-bgimage-no tm-bgcolor-yes" data-id="5d6b3fb" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div className="elementor-element elementor-element-658b4ae elementor-widget elementor-widget-tm_icon_heading" data-id="658b4ae" data-element_type="widget" data-widget_type="tm_icon_heading.default">
                                        <div className="elementor-widget-container">
                                          <div className="themetechmount-iconbox themetechmount-iconbox-styleone themetechmount-iconcolor-white themetechmount-icon-bgcolor-skincolor tm-iconstyle-rounded tm-textalign-center">
                                            <div className="themetechmount-iconbox-inner">
                                              <div className="tm-iconbox-wrapper">
                                                <div className="themetechmount-iconbox-icon">
                                                  <div className="tm-box-icon"><i className="kw_jassio flaticon-dancing"></i></div>
                                                </div>
                                                <div className="themetechmount-iconbox-heading">
                                                  <h2 className="tm-custom-heading">Éveil à la Danse</h2>
                                                  <div className="tm-cta3-content-wrapper">À partir de 3 ans</div>
                                                  <div className="tm-iocnbox-btn"><a href="/nos-cours-2#EVEIL"><span>En savoir plus</span></a></div>
                                                </div>	
                                              </div>
                                            </div>	
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-cf5bcfe tm-bgimage-no tm-bgcolor-yes" data-id="cf5bcfe" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div className="elementor-element elementor-element-f42648b elementor-widget elementor-widget-tm_icon_heading" data-id="f42648b" data-element_type="widget" data-widget_type="tm_icon_heading.default">
                                        <div className="elementor-widget-container">
                                          <div className="themetechmount-iconbox themetechmount-iconbox-styleone themetechmount-iconcolor-white themetechmount-icon-bgcolor-skincolor tm-iconstyle-rounded tm-textalign-center">
                                            <div className="themetechmount-iconbox-inner">
                                              <div className="tm-iconbox-wrapper">
                                                <div className="themetechmount-iconbox-icon">
                                                  <div className="tm-box-icon"><i className="kw_jassio flaticon-tap-dance"></i></div>
                                                </div>
                                                <div className="themetechmount-iconbox-heading">
                                                  <h2 className="tm-custom-heading">Cabaret (Talons)</h2>
                                                  <div className="tm-cta3-content-wrapper">À partir de 16 ans</div>
                                                  <div className="tm-iocnbox-btn"><a href="/nos-cours-2#CABARET"><span>En savoir plus</span></a></div>
                                                </div>	
                                              </div>
                                            </div>	
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-e80159a tm-bgimage-no tm-bgcolor-yes" data-id="e80159a" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div className="elementor-element elementor-element-84b8633 elementor-widget elementor-widget-tm_icon_heading" data-id="84b8633" data-element_type="widget" data-widget_type="tm_icon_heading.default">
                                        <div className="elementor-widget-container">
                                          <div className="themetechmount-iconbox themetechmount-iconbox-styleone themetechmount-iconcolor-white themetechmount-icon-bgcolor-skincolor tm-iconstyle-rounded tm-textalign-center">
                                            <div className="themetechmount-iconbox-inner">
                                              <div className="tm-iconbox-wrapper">
                                                <div className="themetechmount-iconbox-icon">
                                                  <div className="tm-box-icon"><i className="kw_jassio flaticon-dancing-4"></i></div>
                                                </div>
                                                <div className="themetechmount-iconbox-heading">
                                                  <h2 className="tm-custom-heading">Street Jazz</h2>
                                                  <div className="tm-cta3-content-wrapper">À partir de 6 ans</div>
                                                  <div className="tm-iocnbox-btn"><a href="/nos-cours-2#STREET"><span>En savoir plus</span></a></div>
                                                </div>	
                                              </div>
                                            </div>	
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Row 3 */}
                              <div className="elementor-section elementor-inner-section elementor-element elementor-element-54fe961 tm-column-break-ipad-no tm-col-stretched-none elementor-section-boxed elementor-section-height-default elementor-section-height-default tm-bgimage-no tm-bgcolor-yes" data-id="54fe961" data-element_type="section">
                                <div className="elementor-container elementor-column-gap-no">
                                  <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-25a47b5 tm-bgimage-no tm-bgcolor-yes" data-id="25a47b5" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div className="elementor-element elementor-element-c48e936 elementor-widget elementor-widget-tm_icon_heading" data-id="c48e936" data-element_type="widget" data-widget_type="tm_icon_heading.default">
                                        <div className="elementor-widget-container">
                                          <div className="themetechmount-iconbox themetechmount-iconbox-styleone themetechmount-iconcolor-white themetechmount-icon-bgcolor-skincolor tm-iconstyle-rounded tm-textalign-center">
                                            <div className="themetechmount-iconbox-inner">
                                              <div className="tm-iconbox-wrapper">
                                                <div className="themetechmount-iconbox-icon">
                                                  <div className="tm-box-icon"><i className="kw_jassio flaticon-dancing-1"></i></div>
                                                </div>
                                                <div className="themetechmount-iconbox-heading">
                                                  <h2 className="tm-custom-heading">Dance Hall</h2>
                                                  <div className="tm-cta3-content-wrapper">À partir de 8 ans</div>
                                                  <div className="tm-iocnbox-btn"><a href="/nos-cours-2#DANCEHALL"><span>En savoir plus</span></a></div>
                                                </div>	
                                              </div>
                                            </div>	
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-5128c56 tm-bgimage-no tm-bgcolor-yes" data-id="5128c56" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div className="elementor-element elementor-element-85d2ac2 elementor-widget elementor-widget-tm_icon_heading" data-id="85d2ac2" data-element_type="widget" data-widget_type="tm_icon_heading.default">
                                        <div className="elementor-widget-container">
                                          <div className="themetechmount-iconbox themetechmount-iconbox-styleone themetechmount-iconcolor-white themetechmount-icon-bgcolor-skincolor tm-iconstyle-rounded tm-textalign-center">
                                            <div className="themetechmount-iconbox-inner">
                                              <div className="tm-iconbox-wrapper">
                                                <div className="themetechmount-iconbox-icon">
                                                  <div className="tm-box-icon"><i className="kw_jassio flaticon-dancing"></i></div>
                                                </div>
                                                <div className="themetechmount-iconbox-heading">
                                                  <h2 className="tm-custom-heading">Pilates</h2>
                                                  <div className="tm-cta3-content-wrapper">À partir de 16 ans</div>
                                                  <div className="tm-iocnbox-btn"><a href="/nos-cours-2#PILATES"><span>En savoir plus</span></a></div>
                                                </div>	
                                              </div>
                                            </div>	
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-8662bca tm-bgimage-no tm-bgcolor-yes" data-id="8662bca" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div className="elementor-element elementor-element-541296a elementor-widget elementor-widget-tm_icon_heading" data-id="541296a" data-element_type="widget" data-widget_type="tm_icon_heading.default">
                                        <div className="elementor-widget-container">
                                          <div className="themetechmount-iconbox themetechmount-iconbox-styleone themetechmount-iconcolor-white themetechmount-icon-bgcolor-skincolor tm-iconstyle-rounded tm-textalign-center">
                                            <div className="themetechmount-iconbox-inner">
                                              <div className="tm-iconbox-wrapper">
                                                <div className="themetechmount-iconbox-icon">
                                                  <div className="tm-box-icon"><i className="fas fa-walking"></i></div>
                                                </div>
                                                <div className="themetechmount-iconbox-heading">
                                                  <h2 className="tm-custom-heading">Circuit Training</h2>
                                                  <div className="tm-cta3-content-wrapper">À partir de 16 ans</div>
                                                  <div className="tm-iocnbox-btn"><a href="/nos-cours-2#CUISSES"><span>En savoir plus</span></a></div>
                                                </div>	
                                              </div>
                                            </div>	
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-f456204 tm-bgimage-no tm-bgcolor-yes" data-id="f456204" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div className="elementor-element elementor-element-0b58395 elementor-widget elementor-widget-tm_icon_heading" data-id="0b58395" data-element_type="widget" data-widget_type="tm_icon_heading.default">
                                        <div className="elementor-widget-container">
                                          <div className="themetechmount-iconbox themetechmount-iconbox-styleone themetechmount-iconcolor-white themetechmount-icon-bgcolor-skincolor tm-iconstyle-rounded tm-textalign-center">
                                            <div className="themetechmount-iconbox-inner">
                                              <div className="tm-iconbox-wrapper">
                                                <div className="themetechmount-iconbox-icon">
                                                  <div className="tm-box-icon"><i className="kw_jassio flaticon-pole-dance"></i></div>
                                                </div>
                                                <div className="themetechmount-iconbox-heading">
                                                  <h2 className="tm-custom-heading">Tissu Aérien</h2>
                                                  <div className="tm-cta3-content-wrapper">À parir de 6 ans</div>
                                                  <div className="tm-iocnbox-btn"><a href="/nos-cours-2#TISSU"><span>En savoir plus</span></a></div>
                                                </div>	
                                              </div>
                                            </div>	
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Row 4 */}
                              <div className="elementor-section elementor-inner-section elementor-element elementor-element-abfa773 tm-column-break-ipad-no tm-col-stretched-none elementor-section-boxed elementor-section-height-default elementor-section-height-default tm-bgimage-no tm-bgcolor-yes" data-id="abfa773" data-element_type="section">
                                <div className="elementor-container elementor-column-gap-no">
                                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6039067 tm-bgimage-no tm-bgcolor-yes" data-id="6039067" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div className="elementor-element elementor-element-74cd607 elementor-widget elementor-widget-tm_icon_heading" data-id="74cd607" data-element_type="widget" data-widget_type="tm_icon_heading.default">
                                        <div className="elementor-widget-container">
                                          <div className="themetechmount-iconbox themetechmount-iconbox-styleone themetechmount-iconcolor-white themetechmount-icon-bgcolor-skincolor tm-iconstyle-rounded tm-textalign-center">
                                            <div className="themetechmount-iconbox-inner">
                                              <div className="tm-iconbox-wrapper">
                                                <div className="themetechmount-iconbox-icon">
                                                  <div className="tm-box-icon"><i className="kw_jassio flaticon-dancing-1"></i></div>
                                                </div>
                                                <div className="themetechmount-iconbox-heading">
                                                  <h2 className="tm-custom-heading">Classique initiation et élémentaire</h2>
                                                  <div className="tm-cta3-content-wrapper">À partir de 6 ans</div>
                                                  <div className="tm-iocnbox-btn"><a href="/nos-cours-2#INITIATION"><span>En savoir plus</span></a></div>
                                                </div>	
                                              </div>
                                            </div>	
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-698756f tm-bgimage-no tm-bgcolor-yes" data-id="698756f" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                      <div className="elementor-element elementor-element-5d8d408 elementor-widget elementor-widget-tm_icon_heading" data-id="5d8d408" data-element_type="widget" data-widget_type="tm_icon_heading.default">
                                        <div className="elementor-widget-container">
                                          <div className="themetechmount-iconbox themetechmount-iconbox-styleone themetechmount-iconcolor-white themetechmount-icon-bgcolor-skincolor tm-iconstyle-rounded tm-textalign-center">
                                            <div className="themetechmount-iconbox-inner">
                                              <div className="tm-iconbox-wrapper">
                                                <div className="themetechmount-iconbox-icon">
                                                  <div className="tm-box-icon"><i className="far fa-grin"></i></div>
                                                </div>
                                                <div className="themetechmount-iconbox-heading">
                                                  <h2 className="tm-custom-heading">Yoga</h2>
                                                  <div className="tm-cta3-content-wrapper">À partir de 16 ans</div>
                                                  <div className="tm-iocnbox-btn"><a href="/nos-cours-2#CUISSES"><span>En savoir plus</span></a></div>
                                                </div>	
                                              </div>
                                            </div>	
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </section>

                      {/* Video Section */}
                      <section className="elementor-section elementor-top-section elementor-element elementor-element-97e61d9 tm-column-break-ipad-no tm-col-stretched-none elementor-section-boxed elementor-section-height-default elementor-section-height-default tm-bgimage-no tm-bgcolor-yes" data-id="97e61d9" data-element_type="section">
                        <div className="elementor-container elementor-column-gap-default">
                          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-043f151 tm-bgimage-no tm-bgcolor-yes" data-id="043f151" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-abc54e7 elementor-widget elementor-widget-video" data-id="abc54e7" data-element_type="widget" data-widget_type="video.default">
                                <div className="elementor-widget-container">
                                  <div className="elementor-wrapper elementor-open-inline">
                                    <iframe className="elementor-video" frameBorder="0" allowFullScreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" title="YouTube video player" width="640" height="360" src="https://www.youtube.com/embed/npbsAZgqDTM?controls=1&amp;rel=0&amp;playsinline=0&amp;cc_load_policy=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Ftempsdance.fr&amp;widgetid=1&amp;forigin=https%3A%2F%2Ftempsdance.fr%2F%23top&amp;aoriginsup=1&amp;vf=1" id="widget2"></iframe>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-0985e14 tm-bgimage-no tm-bgcolor-yes" data-id="0985e14" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-7affeec tm-align-center elementor-widget elementor-widget-tm_heading" data-id="7affeec" data-element_type="widget" data-widget_type="tm_heading.default">
                                <div className="elementor-widget-container">
                                  <div className="tm-element-heading-content-wrapper center-align tm-reverse-heading-yes tm-seperator-none tm-heading-style-vertical">
                                    <div className="tm-content-header">
                                      <h4 className="tm-element-subhead">À PROPOS DE NOUS</h4>
                                      <h5 className="tm-element-overlay-subhead">Temps Dance</h5>
                                      <h2 className="tm-element-content-heading">VIDÉO</h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-fcbc4b2 elementor-widget elementor-widget-text-editor" data-id="fcbc4b2" data-element_type="widget" data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                  <p>Nous avons une chaîne youtube où nous mettons en scènes nos séances de danse ! Allez découvrir ce que nous faisons grâce à nos videos sur Youtube !</p>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-3ce6817 elementor-align-center tm-btn-color-skincolor tm-btn-style-flat tm-btn-shape-square elementor-widget elementor-widget-button" data-id="3ce6817" data-element_type="widget" data-widget_type="button.default">
                                <div className="elementor-widget-container">
                                  <div className="elementor-button-wrapper">
                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="https://www.youtube.com/channel/UCh42PNfDf0abcZDzb0wzJeQ" target="_blank" rel="noopener noreferrer">
                                      <span className="elementor-button-content-wrapper">
                                        <span className="elementor-button-text">Cliquez ici</span>
                                      </span>
                                    </a>
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
  <a id="totop" href="#top" style={{ display: "none" }}><i className="tm-jassio-icon-angle-up"></i></a>
</>
  );
}
