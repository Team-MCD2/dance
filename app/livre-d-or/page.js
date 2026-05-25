"use client";


import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LivreDOrPage() {
  const testimonials = [
    {
      title: "Encore une année qui s’achève",
      text: "Encore une année qui s’achève avec un spectacle extraordinaire pour la deuxième année consécutive. Merci Sandrine pour ta passion, ton enthousiasme, ton dynamisme et ton amour que tu transmets aux ados."
    },
    {
      title: "Ma fille ADORE la danse",
      text: "Ma fille ADORE la danse .Depuis la moyen section , elle en fait ici.Je vous recomande parfaitement cette école de danse."
    },
    {
      title: "C est l Ecole de",
      text: "C est l Ecole de danse avec un grand E. Vous savez celle que vous ne pourrez jamais quitter. Des cours plein de bonne humeur, de bienveillance, et surtout de la danse, de l énergie, des chorés magiques! Temps dance un jour, temps dance toujours!"
    },
    {
      title: "Inizan Mélanie",
      text: "9 ans que je suis dans cette école et toujours au top! Je danse avec Sandrine Une super prof ! Dans les cours on a une très bonne ambiance, un moment de lâcher prise chaque semaine, des chorés de folies qui allient plaisir et technique."
    },
    {
      title: "Engy",
      text: "Très belle école avec de l’énergie à revendre! Des profs passionnés et qui aiment transmettre leur danse. Bravo à toute l’équipe, superbe studio. Bonne ambiance travail et rigueur! Aller y les yeux fermés !"
    },
    {
      title: "Dupuy Anouk",
      text: "Super nouveau site ! On est fan de cette école, des profs, de l’ambiance ! Bravo !"
    },
    {
      title: "Saléme",
      text: "Temps Dance est INCROYABLE ! L’ambiance, les profs et les chorés sont juste au top. Merci à Sandrine, de pouvoir s’investir autant avec nous et de nous donner sa passion <3"
    },
    {
      title: "Le nain 2 #S",
      text: "Team HipHop Temps Dance, la meilleur !! Ambiance de ouf, chorés de ouf, personnalités de ouf, prof de ouf, bref, une BOOOOOOMBE !! Néo-Classique au top, Effeuillage cabaret génial et l’éclate en StreetJazz. Bref, que demander de mieux, une école de danse où j’aime venir à chaque cours =D"
    },
    {
      title: "Le nain #A",
      text: "De la vraie bombe cette école, tout comme sa directrice. Cours parfaits, ambiance au top, bref que demander de plus?"
    },
    {
      title: "Une élève",
      text: "Super école super ambiance et des chorées qui tuent!!!! Merci à Sandrine pour tout son investissement et sa passion!!! merci pour tout"
    },
    {
      title: "Lélé",
      text: "meilleure école de danse du monde, des bisous"
    },
    {
      title: "tu sais qui",
      text: "tu vas avoir beaucoup de reussite bravo pour tout ce que tu fais allez bisous 🙂"
    },
    {
      title: "EVA",
      text: "très beau site, ludique, facile et très riche! bravo ! bises"
    },
    {
      title: "Audrey",
      text: "hey c moi audrey super votre site j’aime !!! j’aime ce que vous faites … L’annee prochaine sur je viens c obliger := je vous a bientot !!!:"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
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
                    <article className="post-1307 page type-page status-publish hentry" id="post-1307">
                      <header className="single-entry-header tm-hide">
                        <h2 className="entry-title">Livre D’Or</h2>
                      </header>
                      
                      <div className="entry-content">
                        <div className="elementor elementor-1307">
                          
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

                          {/* Presentation Title */}
                          <section className="elementor-section elementor-top-section elementor-element elementor-section-stretched tm-column-break-ipad-yes tm-col-stretched-none elementor-section-boxed elementor-section-height-default inner-page-hero">
                            <div className="elementor-container elementor-column-gap-no">
                              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element tm-align-center elementor-widget elementor-widget-tm_heading">
                                    <div className="elementor-widget-container">
                                      <div className="tm-element-heading-content-wrapper center-align tm-reverse-heading-yes tm-seperator-none tm-heading-style-vertical">
                                        <div className="tm-content-header">
                                          <h3 className="tm-element-subhead" style={{ color: "#ff2a70", fontWeight: "600" }}>Nos témoignages</h3>
                                          <h4 className="tm-element-overlay-subhead" style={{ top: "-15px" }}>Temps Dance</h4>
                                          <h1 className="tm-element-content-heading">Livre D'Or</h1>
                                        </div>
                                      </div> 
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          {/* Testimonials Slider Section */}
                          <section className="elementor-section elementor-top-section elementor-element tm-column-break-ipad-no tm-col-stretched-none elementor-section-boxed elementor-section-height-default" style={{ padding: "40px 0 20px 0" }}>
                            <div className="elementor-container elementor-column-gap-default" style={{ display: "flex", justifyContent: "center" }}>
                              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element" style={{ maxWidth: "800px", width: "100%" }}>
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-widget elementor-widget-shortcode">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-shortcode">
                                        
                                        <div className="strong-view strong-view-id-1 modern wpmtst-modern slider-container" style={{ position: "relative" }}>
                                          
                                          {/* Slider Content Wrapper */}
                                          <div className="strong-content" style={{ minHeight: "260px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                                            
                                            {testimonials.map((item, idx) => {
                                              const isActive = currentIndex === idx;
                                              return (
                                                <div 
                                                  key={idx} 
                                                  className="wpmtst-testimonial testimonial" 
                                                  style={{ 
                                                    opacity: isActive ? 1 : 0,
                                                    visibility: isActive ? "visible" : "hidden",
                                                    position: isActive ? "relative" : "absolute",
                                                    width: "100%",
                                                    transition: "opacity 0.6s ease-in-out, visibility 0.6s ease-in-out",
                                                    zIndex: isActive ? 1 : 0
                                                  }}
                                                >
                                                  <div className="wpmtst-testimonial-inner testimonial-inner" style={{ padding: "40px 35px", borderRadius: "12px", backgroundColor: "#1e293b", boxShadow: "0 15px 40px rgba(0,0,0,0.18)", borderLeft: "5px solid #ff2a70" }}>
                                                    <div className="wpmtst-testimonial-content testimonial-content">
                                                      <h3 className="wpmtst-testimonial-heading testimonial-heading" style={{ fontSize: "22px", color: "#ffffff", fontWeight: "700", fontFamily: "Oswald, Arial, sans-serif", margin: "0 0 16px 0" }}>
                                                        {item.title}
                                                      </h3>
                                                      <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "16px", lineHeight: "28px", margin: "0 0 24px 0" }}>
                                                        {item.text}
                                                      </p>
                                                    </div>
                                                    
                                                    {/* Star Ratings */}
                                                    <div className="wpmtst-testimonial-field testimonial-field" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                      <span className="strong-rating-wrapper in-view">
                                                        <span className="strong-rating" style={{ display: "flex", gap: "4px" }}>
                                                          {[...Array(5)].map((_, i) => (
                                                            <span key={i} className="star" style={{ display: "inline-block" }}>
                                                              <svg aria-hidden="true" className="star_solid" role="img" viewBox="-8 -8 584 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "18px", height: "18px", fill: "#ff2a70" }}>
                                                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                              </svg>
                                                            </span>
                                                          ))}
                                                        </span>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              );
                                            })}

                                          </div>

                                          {/* Slider Controls (Prev/Next) */}
                                          <div className="slider-controls" style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px" }}>
                                            <button 
                                              onClick={handlePrev} 
                                              style={{ 
                                                width: "45px", 
                                                height: "45px", 
                                                borderRadius: "50%", 
                                                border: "2px solid #ff2a70", 
                                                backgroundColor: "transparent", 
                                                color: "#ff2a70", 
                                                cursor: "pointer", 
                                                display: "flex", 
                                                alignItems: "center", 
                                                justifyContent: "center",
                                                transition: "all 0.3s"
                                              }}
                                              onMouseEnter={(e) => { 
                                                e.currentTarget.style.backgroundColor = '#ff2a70'; 
                                                e.currentTarget.querySelector('svg').style.fill = '#fff';
                                              }}
                                              onMouseLeave={(e) => { 
                                                e.currentTarget.style.backgroundColor = 'transparent'; 
                                                e.currentTarget.querySelector('svg').style.fill = '#ff2a70';
                                              }}
                                            >
                                              <svg viewBox="0 0 320 512" style={{ width: "12px", height: "18px", fill: "#ff2a70", transition: "fill 0.3s" }}>
                                                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                                              </svg>
                                            </button>
                                            <button 
                                              onClick={handleNext} 
                                              style={{ 
                                                width: "45px", 
                                                height: "45px", 
                                                borderRadius: "50%", 
                                                border: "2px solid #ff2a70", 
                                                backgroundColor: "transparent", 
                                                color: "#ff2a70", 
                                                cursor: "pointer", 
                                                display: "flex", 
                                                alignItems: "center", 
                                                justifyContent: "center",
                                                transition: "all 0.3s"
                                              }}
                                              onMouseEnter={(e) => { 
                                                e.currentTarget.style.backgroundColor = '#ff2a70'; 
                                                e.currentTarget.querySelector('svg').style.fill = '#fff';
                                              }}
                                              onMouseLeave={(e) => { 
                                                e.currentTarget.style.backgroundColor = 'transparent'; 
                                                e.currentTarget.querySelector('svg').style.fill = '#ff2a70';
                                              }}
                                            >
                                              <svg viewBox="0 0 320 512" style={{ width: "12px", height: "18px", fill: "#ff2a70", transition: "fill 0.3s" }}>
                                                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                                              </svg>
                                            </button>
                                          </div>

                                        </div>

                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          {/* CTA: Je dépose un témoignage */}
                          <section className="elementor-section elementor-top-section elementor-element tm-column-break-ipad-no tm-col-stretched-none elementor-section-boxed elementor-section-height-default" style={{ paddingBottom: "60px" }}>
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-align-center tm-btn-color-skincolor tm-btn-style-flat tm-btn-shape-square elementor-widget elementor-widget-button" style={{ textAlign: "center" }}>
                                    <div className="elementor-widget-container">
                                      <div className="elementor-button-wrapper">
                                        <Link 
                                          className="elementor-button elementor-button-link elementor-size-sm" 
                                          href="/depot-dun-temoignage"
                                          style={{ display: "inline-block", padding: "15px 35px", backgroundColor: "#ff2a70", color: "#fff", borderRadius: "6px", fontWeight: "600", textDecoration: "none", fontSize: "14px", textTransform: "uppercase", transition: "background-color 0.2s ease" }}
                                        >
                                          <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">Je dépose un témoignage</span>
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
