"use client";


import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      title: "01. Comment s'inscrire ?",
      content: (
        <p className="font_8">
          Si vous souhaitez suivre un cours pour la première fois vous n’avez pas besoin de réserver ni de vous inscrire, vous devez simplement régler le prix du cours à l’unité à l’accueil du studio de danse en espèces&nbsp;<br/><br/>
          Si vous voulez vraiment vous inscrire, allez sur la rubrique <Link href="/planning-tarifs">Planning &amp; Tarifs</Link>
        </p>
      )
    },
    {
      title: "02. Quelle tenue dois-je porter en cours ?",
      content: (
        <>
          <p>Bien que nous n’exigions pas de tenue spécifique pour la danse, il est important pour vous ou votre enfant de devoir se changer pour le cours. <br/>D’une part les habits de ville ne facilitent pas le mouvement et d’autre part le fait de se changer permet de se préparer à l’activité qui va suivre.</p>
          <p><span style={{ textDecoration: "underline" }}><strong>Eveil / Initiation<br/></strong></span><br/><strong>Pieds :</strong> chaussons de danse (rose), chaussettes<br/><strong>À éviter :</strong> les chaussons à semelle en plastique dur, les bas</p>
          <p><strong>Vêtements :</strong> justaucorps de cours, collant rose<br/><strong>Coiffure :</strong> Cheveux attachés</p>
          <p><span style={{ textDecoration: "underline" }}><strong>Street Jazz</strong></span></p>
          <p><strong>Pieds :</strong> chaussons de danse Jazz (noires)<br/><strong>À éviter :</strong> les chaussons à semelle en plastique dur, les bas</p>
          <p><strong>Vêtements :</strong> élastiques pour ne pas entraver le mouvement, assez prêt du corps surtout pour faciliter les corrections (notamment les genoux!)<br/><strong>Coiffure :</strong> cheveux attachés</p>
          <p><span style={{ textDecoration: "underline" }}><strong>Contemporain<br/></strong></span><br/><strong>Pieds :</strong> chaussettes ou pieds nus</p>
          <p><strong>Vêtements :</strong> amples et/ou élastiques pour ne pas entraver le mouvement<br/><strong>Coiffure :</strong> cheveux attachés</p>
          <p><span style={{ textDecoration: "underline" }}><strong>Hip-Hop<br/></strong></span><br/><strong>Pieds :</strong> baskets uniquement réservée à l’usage en intérieur avec la mention <br/>No Marking</p>
          <p><strong>Vêtements :</strong> amples et/ou élastiques pour ne pas entraver le mouvement<br/><strong>Coiffure :</strong> cheveux attachés</p>
          <p><span style={{ textDecoration: "underline" }}><strong>Afro Kid’s<br/></strong></span><br/><strong>Pieds :</strong> baskets uniquement réservée à l’usage en intérieur avec la mention No Marking</p>
          <p><strong>Vêtements :</strong> amples et/ou élastiques pour ne pas entraver le mouvement<span style={{ textDecoration: "underline" }}><strong><br/></strong></span></p>
        </>
      )
    },
    {
      title: "03. Que trouve-t-on sur le site ?",
      content: (
        <ul>
          <li><strong>Programme de la saison dans notre rubrique <Link href="/planning-tarifs">Planning et Tarifs</Link><br/></strong></li>
          <li><strong>La <Link href="/planning-tarifs">grille horaire</Link> des cours de la saison en cours</strong></li>
          <li><strong><Link href="/albums">Album</Link> : Contient les photos du spectacle</strong></li>
        </ul>
      )
    },
    {
      title: "04. Quelles sont vos conditions de réglement ?",
      content: (
        <>
          <p>Vous pouvez payer en plusieurs fois jusqu’à 6 fois.&nbsp;</p>
          <p>Payable en début d’année et encaissé au fur et à mesure des mois de danse.</p>
          <p>Si toutefois vous ne poursuivez pas votre saison de danse, aucun remboursement ne sera effectué après les cours d’essais et tout trimestre commencé est dû et non remboursable !</p>
          <p>Merci de votre compréhension, la Direction.</p>
        </>
      )
    }
  ];

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
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
                    <article className="post-1305 page type-page status-publish hentry" id="post-1305">
                      <header className="single-entry-header tm-hide">
                        <h2 className="entry-title">F.A.Q</h2>
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

                          {/* Section: Qui Sommes Nous / A propos de nous */}
                          <section className="elementor-section elementor-top-section elementor-element tm-column-break-ipad-no tm-col-stretched-none elementor-section-boxed elementor-section-height-default inner-page-hero" style={{ padding: "40px 0" }}>
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element tm-align-center elementor-widget elementor-widget-tm_heading">
                                    <div className="elementor-widget-container">
                                      <div className="tm-element-heading-content-wrapper center-align tm-reverse-heading-yes tm-seperator-none tm-content-with-desc tm-heading-style-vertical">
                                        <div className="tm-content-header">
                                          <h4 className="tm-element-subhead" style={{ color: "#ff2a70", fontWeight: "600" }}>QUI SOMMES NOUS ?</h4>
                                          <h5 className="tm-element-overlay-subhead" style={{ top: "-15px" }}>Temps Dance</h5>
                                          <h2 className="tm-element-content-heading">À propos de nous !</h2>
                                        </div>
                                        <div className="tm-element-content-desctxt" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '22px', fontWeight: '500', lineHeight: '1.6', color: '#555' }}>
                                          Quand des danseurs passionnés décident de réaliser leur rêve pour proposer un nouveau pôle culturel pour toutes les générations et pour toute la famille : L'école de danse Temps Dance
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          {/* Section: Image & Accordion */}
                          <div className="elementor-section elementor-top-section elementor-element tm-column-break-ipad-yes elementor-section-stretched tm-col-stretched-none elementor-section-boxed elementor-section-height-default" style={{ paddingBottom: "50px" }}>
                            <div className="elementor-container elementor-column-gap-no" style={{ display: "flex", flexWrap: "wrap" }}>
                              
                              {/* Left Column: Image */}
                              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element" style={{ flex: "1 1 50%", minWidth: "300px", padding: "15px" }}>
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-widget elementor-widget-image" style={{ textAlign: "center" }}>
                                    <div className="elementor-widget-container">
                                      <Image 
                                        alt="FAQ Image" 
                                        className="attachment-large size-large wp-image-8285" 
                                        src="/assets/wp-content/uploads/2022/03/FAQ-2.png" 
                                        width={500}
                                        height={500}
                                        style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Right Column: Accordion */}
                              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element" style={{ flex: "1 1 50%", minWidth: "300px", padding: "15px" }}>
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-widget elementor-widget-accordion">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-accordion" role="tablist">
                                        
                                        {faqItems.map((item, idx) => {
                                          const isOpen = openIndex === idx;
                                          return (
                                            <div key={idx} className="elementor-accordion-item" style={{ marginBottom: "15px", borderRadius: "6px", boxShadow: "0 5px 20px rgba(0,0,0,0.03)", overflow: "hidden", border: "1px solid #f0f0f0" }}>
                                              <div 
                                                className={`elementor-tab-title ${isOpen ? 'elementor-active' : ''}`}
                                                role="tab" 
                                                onClick={() => toggleItem(idx)}
                                                style={{ 
                                                  display: "flex", 
                                                  justifyContent: "space-between", 
                                                  alignItems: "center", 
                                                  cursor: "pointer", 
                                                  padding: "20px 25px", 
                                                  backgroundColor: isOpen ? "#ff2a70" : "#ffffff",
                                                  transition: "all 0.3s ease" 
                                                }}
                                              >
                                                <a className="elementor-accordion-title" style={{ fontSize: "18px", fontWeight: "600", fontFamily: "Oswald, Arial, sans-serif", color: isOpen ? "#ffffff" : "#232323", margin: 0 }}>
                                                  {item.title}
                                                </a>
                                                <span className="elementor-accordion-icon elementor-accordion-icon-right" style={{ color: isOpen ? "#ffffff" : "#616161", fontSize: "16px" }}>
                                                  <i className={`fas ${isOpen ? 'fa-arrow-down' : 'fa-arrow-right'}`}></i>
                                                </span>
                                              </div>
                                              
                                              {/* Content */}
                                              <div 
                                                className="elementor-tab-content elementor-clearfix" 
                                                style={{ 
                                                  display: isOpen ? "block" : "none", 
                                                  padding: "25px", 
                                                  backgroundColor: "#ffffff",
                                                  color: "#616161", 
                                                  fontSize: "15px", 
                                                  lineHeight: "26px" 
                                                }}
                                              >
                                                {item.content}
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
                          </div>

                          {/* Section: Video Link Page Bottom */}
                          <section className="elementor-section elementor-top-section elementor-element tm-column-break-ipad-no tm-col-stretched-none elementor-section-boxed elementor-section-height-default" style={{ padding: "50px 0", borderTop: "1px solid #f5f5f5" }}>
                            <div className="elementor-container elementor-column-gap-default" style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                              
                              {/* Video Left Column */}
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

                              {/* Right Column: Call to YouTube */}
                              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element" style={{ flex: "1 1 50%", minWidth: "300px", padding: "15px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  
                                  <div className="elementor-element tm-align-center elementor-widget elementor-widget-tm_heading" style={{ marginBottom: "20px" }}>
                                    <div className="elementor-widget-container">
                                      <div className="tm-element-heading-content-wrapper center-align tm-reverse-heading-yes tm-seperator-none tm-heading-style-vertical">
                                        <div className="tm-content-header">
                                          <h4 className="tm-element-subhead" style={{ color: "#ff2a70", fontWeight: "600" }}>À PROPOS DE NOUS</h4>
                                          <h5 className="tm-element-overlay-subhead" style={{ top: "-15px" }}>Temps Dance</h5>
                                          <h2 className="tm-element-content-heading">VIDÉO</h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="elementor-element elementor-widget elementor-widget-text-editor" style={{ marginBottom: "25px", color: "#616161", fontSize: "14px", lineHeight: "24px" }}>
                                    <div className="elementor-widget-container">
                                      <p>Nous avons une chaîne youtube, où nous mettons en scènes nos séances de danse ! Allez découvrir ce que nous faisons grâce à nos vidéos sur Youtube !</p>
                                    </div>
                                  </div>

                                  <div className="elementor-element elementor-align-center tm-btn-color-skincolor tm-btn-style-flat tm-btn-shape-square elementor-widget elementor-widget-button">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-button-wrapper">
                                        <a 
                                          className="elementor-button elementor-button-link elementor-size-sm" 
                                          href="https://www.youtube.com/channel/UCh42PNfDf0abcZDzb0wzJeQ" 
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                          style={{ display: "inline-block", padding: "12px 35px", backgroundColor: "#ff2a70", color: "#fff", borderRadius: "6px", fontWeight: "600", textDecoration: "none", fontSize: "14px", textTransform: "uppercase", transition: "background-color 0.2s ease" }}
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
