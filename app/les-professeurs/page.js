"use client";


import Link from 'next/link';
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LesProfesseursPage() {
  const teachers = [
    {
      name: 'Lola Hamousin',
      position: 'Professeur de Contemporain',
      image: '/assets/content/uploads/2025/06/Lola-Hamousin-400x500.jpg',
      link: '/team-member/lola-hamousin'
    },
    {
      name: 'Sandrine Walter',
      position: 'Professeur de Street Jazz, Hip-Hop, Cabaret et Jazz Cabaret',
      image: '/assets/content/uploads/2022/03/6-400x470.png',
      link: '/team-member/sandrine-walter'
    },
    {
      name: 'Jayen Scratchy',
      position: 'Professeur de Break Dance',
      image: '/assets/content/uploads/2022/10/jayden-400x500.jpg',
      link: '/team-member/jayen-scratchy'
    },
    {
      name: 'Alexis Sabatier',
      position: 'Professeur éveils initiations et élémentaires',
      image: '/assets/content/uploads/2022/10/alexissabathier-400x500.jpeg',
      link: '/team-member/alexis-sabatier'
    },
    {
      name: 'Soraya',
      position: 'Professeur de Dancehall et Hip-Hop création',
      image: '/assets/content/uploads/2021/12/WhatsApp-Image-2022-03-19-at-16.37.32-400x500.jpeg',
      link: '/team-member/soraya'
    },
    {
      name: 'Laura',
      position: 'Professeur Afro Dance',
      image: '/assets/content/uploads/2021/12/17dbf99d-1ad8-459f-813e-8fa40b95e705-400x500.jpeg',
      link: '/team-member/carla'
    },
    {
      name: 'Alexia',
      position: 'Coach Renforcement et Pilates',
      image: '/assets/content/uploads/2022/03/17121342-10211741247396983-1898119296-o-400x500.jpeg',
      link: '/team-member/alexia'
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
                    <article className="post-1297 page type-page status-publish hentry" id="post-1297">
                      <header className="single-entry-header tm-hide">
                        <h2 className="entry-title">Les Professeurs</h2>
                      </header>
                      
                      <div className="entry-content">
                        <div className="elementor elementor-1297">

                          {/* Hero Banner */}
                          <section className="inner-page-hero" style={{ textAlign: "center", padding: "55px 20px 45px" }}>
                            <div className="tm-element-heading-content-wrapper center-align tm-reverse-heading-yes tm-seperator-none tm-heading-style-vertical">
                              <div className="tm-content-header">
                                <h4 className="tm-element-subhead">Présentation</h4>
                                <h5 className="tm-element-overlay-subhead">Temps Dance</h5>
                                <h2 className="tm-element-content-heading">Les Professeurs</h2>
                              </div>
                            </div>
                          </section>

                          {/* Teachers Grid */}
                          <section style={{ padding: "65px 20px 70px", backgroundColor: "#fff" }}>
                            <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
                              {teachers.map((teacher, idx) => (
                                <Link key={idx} href={teacher.link} style={{ display: "block", textDecoration: "none", width: "calc(33.33% - 40px)", minWidth: "280px", maxWidth: "340px", flex: "1 1 280px", marginBottom: "60px" }}>
                                  <div>
                                    {/* Image Container */}
                                    <div style={{ borderRadius: "10px", overflow: "hidden", position: "relative", backgroundColor: "#f0f0f0", aspectRatio: "3/4", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", transition: "transform 0.3s ease", marginBottom: "20px" }}
                                      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; }}
                                      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
                                    >
                                      <img src={teacher.image} alt={teacher.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block", transition: "transform 0.5s ease" }} 
                                        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; }}
                                        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
                                      />
                                      {/* Share Icon */}
                                      <div style={{ position: "absolute", bottom: "15px", left: "15px", width: "40px", height: "40px", backgroundColor: "#ff2a70", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", zIndex: 2 }}>
                                        <i className="tm-jassio-icon-share-1" style={{ fontSize: "16px" }}></i>
                                      </div>
                                    </div>
                                    
                                    {/* Text Content */}
                                    <div style={{ textAlign: "center" }}>
                                      <h4 style={{ fontFamily: "'Abuget', Arial, sans-serif", fontSize: "50px", color: "#ff2a70", fontWeight: "500", margin: "0 0 5px 0", lineHeight: "1" }}>
                                        {teacher.name}
                                      </h4>
                                      <div style={{ color: "#616161", fontSize: "14px", fontWeight: "500", letterSpacing: "0.5px" }}>
                                        {teacher.position || teacher.role}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
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
      <Link id="totop" href="#top" style={{ display: "none" }}><i className="tm-jassio-icon-angle-up"></i></Link>
    </>
  );
}
