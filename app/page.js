"use client";


import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSliderScraped from "./components/HeroSliderScraped";

export default function HomePage() {

  return (
    <>
      <div id="tm-home"></div>
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        @keyframes videoFadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .elementor-wrapper:hover .play-btn-overlay {
          background-color: #ff2a70 !important;
          transform: translate(-50%, -50%) scale(1.1) !important;
        }
        .elementor-wrapper:hover .hover-zoom {
          transform: scale(1.05) !important;
        }
      `}</style>
      <div className="main-holder">
        <div id="page" className="hfeed site">
          <Header />
          
      {/* Hero Slider Section */}
      <HeroSliderScraped />

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
                      <section className="elementor-section elementor-top-section elementor-element elementor-element-c19e8d7 tm-column-break-ipad-yes elementor-section-stretched tm-col-stretched-none elementor-section-boxed elementor-section-height-default elementor-section-height-default tm-bgimage-no tm-bgcolor-yes" data-id="c19e8d7" data-element_type="section" style={{ paddingTop: "70px", paddingBottom: "70px" }}>
                        <div className="elementor-container elementor-column-gap-no">
                          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4eea6a3 tm-bgimage-no tm-bgcolor-yes" data-id="4eea6a3" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-4ee5ccd tm-border-img1 elementor-widget elementor-widget-image" data-id="4ee5ccd" data-element_type="widget" data-widget_type="image.default">
                                <div className="elementor-widget-container">
                                  <Image width={429} height={522} src="/assets/left-img-01.png" className="attachment-full size-full wp-image-1160" alt="À Propos de nous" data-id="1160" />
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
                                            <Link className="elementor-button elementor-button-link elementor-size-md" href="/faq">
                                              <span className="elementor-button-content-wrapper">
                                                <span className="elementor-button-icon"><i aria-hidden="true" className="fas fa-long-arrow-alt-right"></i></span>
                                                <span className="elementor-button-text">En savoir plus</span>
                                              </span>
                                            </Link>
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
                      <section style={{ padding: "70px 20px", textAlign: "center", backgroundColor: "#fff" }}>
                        <div className="tm-element-heading-content-wrapper center-align tm-reverse-heading-yes tm-seperator-solid tm-heading-style-vertical">
                          <div className="tm-content-header">
                            <h4 className="tm-element-subhead">Actualité</h4>
                            <h5 className="tm-element-overlay-subhead">Actualité</h5>
                            <h2 className="tm-element-content-heading">Informations fin d&apos;année</h2>
                          </div>
                        </div>
                        <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.8", margin: "20px auto 8px", maxWidth: "520px" }}>
                          Inscriptions saison 2026-2027<br />
                          Samedi 27 et dimanche 28 juin — <strong>10h–13h et 14h–18h</strong>
                        </p>
                        <p style={{ fontSize: "15px", color: "#888", margin: "0 auto 36px", maxWidth: "460px" }}>
                          Le planning arrive bientôt ainsi que les fiches pour la nouvelle saison.
                        </p>
                        <Link href="/planning-tarifs" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 32px", backgroundColor: "#ff2a70", color: "#fff", borderRadius: "4px", fontWeight: "600", fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase", textDecoration: "none" }}>
                          Fiche inscription <i className="fas fa-long-arrow-alt-right"></i>
                        </Link>
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
                                    <Link className="elementor-button elementor-button-link elementor-size-md" href="/planning-tarifs">
                                      <span className="elementor-button-content-wrapper">
                                        <span className="elementor-button-icon"><i aria-hidden="true" className="fas fa-long-arrow-alt-right"></i></span>
                                        <span className="elementor-button-text">FICHE INSCRIPTION</span>
                                      </span>
                                    </Link>
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
                                                  <div className="tm-iocnbox-btn"><Link href="/nos-cours-2#Jazz"><span>En savoir plus</span></Link></div>
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
                                                  <div className="tm-iocnbox-btn"><Link href="/nos-cours-2#CONTEMPORAIN2"><span>En savoir plus</span></Link></div>
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
                                                  <div className="tm-iocnbox-btn"><Link href="/nos-cours-2#BREAK"><span>En savoir plus</span></Link></div>
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
                                                  <div className="tm-iocnbox-btn"><Link href="/nos-cours-2#Zumba"><span>En savoir plus</span></Link></div>
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
                                                  <div className="tm-iocnbox-btn"><Link href="/nos-cours-2#HIPHOP"><span>En savoir plus</span></Link></div>
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
                                                  <div className="tm-iocnbox-btn"><Link href="/nos-cours-2#EVEIL"><span>En savoir plus</span></Link></div>
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
                                                  <div className="tm-iocnbox-btn"><Link href="/nos-cours-2#CABARET"><span>En savoir plus</span></Link></div>
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
                                                  <div className="tm-iocnbox-btn"><Link href="/nos-cours-2#STREET"><span>En savoir plus</span></Link></div>
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
                                                  <div className="tm-iocnbox-btn"><Link href="/nos-cours-2#DANCEHALL"><span>En savoir plus</span></Link></div>
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
                                                  <div className="tm-iocnbox-btn"><Link href="/nos-cours-2#PILATES"><span>En savoir plus</span></Link></div>
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
                                                  <div className="tm-iocnbox-btn"><Link href="/nos-cours-2#CUISSES"><span>En savoir plus</span></Link></div>
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
                                                  <div className="tm-iocnbox-btn"><Link href="/nos-cours-2#TISSU"><span>En savoir plus</span></Link></div>
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
                                                  <div className="tm-iocnbox-btn"><Link href="/nos-cours-2#INITIATION"><span>En savoir plus</span></Link></div>
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
                                                  <div className="tm-iocnbox-btn"><Link href="/nos-cours-2#CUISSES"><span>En savoir plus</span></Link></div>
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
                                  <div className="elementor-wrapper elementor-open-inline" style={{ cursor: "pointer", position: "relative", overflow: "hidden", borderRadius: "10px" }} onClick={() => setIsVideoPlaying(true)}>
                                    {!isVideoPlaying ? (
                                      <div className="elementor-custom-embed-image-overlay" style={{ position: "relative", width: "100%", height: "100%" }}>
                                        <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
                                          <img src="https://i.ytimg.com/vi/npbsAZgqDTM/maxresdefault.jpg" alt="Video" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} className="hover-zoom" />
                                        </div>
                                        <div className="elementor-custom-embed-play play-btn-overlay" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80px", height: "80px", backgroundColor: "rgba(0,0,0,0.6)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }}>
                                          <i className="fa fa-play" style={{ color: "#fff", fontSize: "30px", marginLeft: "5px" }}></i>
                                        </div>
                                      </div>
                                    ) : (
                                      <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
                                        <iframe className="elementor-video" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} frameBorder="0" allowFullScreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="YouTube video player" src="https://www.youtube.com/embed/npbsAZgqDTM?autoplay=1&amp;controls=1&amp;rel=0&amp;modestbranding=1" id="widget2"></iframe>
                                      </div>
                                    )}
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
  <Link id="totop" href="#top" style={{ display: "none" }}><i className="tm-jassio-icon-angle-up"></i></Link>
</>
  );
}
