"use client";


import Link from 'next/link';
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import IconBox from "../components/IconBox";

export default function LesProfesseursPage() {
  const teachers = [
    {
      name: 'Lola Hamousin',
      position: 'Professeur de Contemporain',
      image: '/assets/wp-content/uploads/2025/06/Lola-Hamousin-400x500.jpg',
      link: '/team-member/lola-hamousin'
    },
    {
      name: 'Sandrine Walter',
      position: 'Professeur de Street Jazz, Hip-Hop, Cabaret et Jazz Cabaret',
      image: '/assets/wp-content/uploads/2022/03/6-400x470.png',
      link: '/team-member/sandrine-walter'
    },
    {
      name: 'Jayen Scratchy',
      position: 'Professeur de Break Dance',
      image: '/assets/wp-content/uploads/2022/10/jayden-400x500.jpg',
      link: '/team-member/jayen-scratchy'
    },
    {
      name: 'Alexis Sabatier',
      position: 'Professeur éveils initiations et élémentaires',
      image: '/assets/wp-content/uploads/2022/10/alexissabathier-400x500.jpeg',
      link: '/team-member/alexis-sabatier'
    },
    {
      name: 'Soraya',
      position: 'Professeur de Dancehall et Hip-Hop création',
      image: '/assets/wp-content/uploads/2021/12/WhatsApp-Image-2022-03-19-at-16.37.32-400x500.jpeg',
      link: '/team-member/soraya'
    },
    {
      name: 'Laura',
      position: 'Professeur Afro Dance',
      image: '/assets/wp-content/uploads/2021/12/17dbf99d-1ad8-459f-813e-8fa40b95e705-400x500.jpeg',
      link: '/team-member/carla'
    },
    {
      name: 'Alexia',
      position: 'Coach Renforcement et Pilates',
      image: '/assets/wp-content/uploads/2022/03/17121342-10211741247396983-1898119296-o-400x500.jpeg',
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
                            <p className="tm-element-subhead" style={{ color: "#ff2a70", fontSize: "13px", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 10px" }}>Présentation</p>
                            <h1 style={{ color: "#ffffff", fontFamily: "Oswald, Arial, sans-serif", fontSize: "38px", fontWeight: "700", margin: 0 }}>Les Professeurs</h1>
                          </section>

                          {/* Teachers Grid */}
                          <section style={{ padding: "65px 20px 70px", backgroundColor: "#fff" }}>
                            <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
                              {teachers.map((teacher, idx) => (
                                <Link key={idx} href={teacher.link} style={{ textDecoration: "none", width: "calc(33.33% - 20px)", minWidth: "240px", maxWidth: "320px", flex: "1 1 240px" }}>
                                  <div style={{ borderRadius: "12px", overflow: "hidden", backgroundColor: "#fff", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", transition: "transform 0.25s, box-shadow 0.25s", borderBottom: "3px solid transparent" }}
                                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(255,42,112,0.15)"; e.currentTarget.style.borderBottom = "3px solid #ff2a70"; }}
                                    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"; e.currentTarget.style.borderBottom = "3px solid transparent"; }}
                                  >
                                    <div style={{ width: "100%", aspectRatio: "4/5", overflow: "hidden", backgroundColor: "#f0f0f0" }}>
                                      <img src={teacher.image} alt={teacher.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
                                    </div>
                                    <div style={{ padding: "18px 20px 20px" }}>
                                      <h3 style={{ fontFamily: "Oswald, Arial, sans-serif", fontSize: "18px", fontWeight: "700", color: "#1e293b", margin: "0 0 6px", writingMode: "horizontal-tb" }}>{teacher.name}</h3>
                                      <p style={{ fontSize: "13px", color: "#888", margin: 0, lineHeight: "1.5", textTransform: "uppercase", letterSpacing: "0.5px", writingMode: "horizontal-tb" }}>{teacher.position}</p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </section>

                        </div>
                      </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          {/* Presentation Title & Grid */}
                          <section className="elementor-section elementor-top-section elementor-element elementor-section-stretched tm-column-break-ipad-yes tm-col-stretched-none elementor-section-boxed elementor-section-height-default">
                            <div className="elementor-container elementor-column-gap-no">
                              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element tm-align-center elementor-widget elementor-widget-tm_team_element">
                                    <div className="elementor-widget-container">
                                      <div className="themetechmount-boxes themetechmount-boxes-team themetechmount-element-teambox-style1 themetechmount-boxes-view-default themetechmount-boxes-col-three themetechmount-boxes-gap-30px">
                                        <div className="themetechmount-boxes-inner">
                                          
                                          <div className="themetechmount-box-heading-wrapper">
                                            <div className="tm-element-heading-content-wrapper center-align tm-reverse-heading-yes tm-seperator-none tm-heading-style-vertical">
                                              <div className="tm-content-header">
                                                <h4 className="tm-element-subhead">Présentation</h4>
                                                <h4 className="tm-element-overlay-subhead">Temps Dance</h4>
                                                <h2 className="tm-element-content-heading">Les professeurs</h2>
                                              </div>
                                            </div> 
                                          </div>

                                          <div className="themetechmount-boxes-row-wrapper row multi-columns-row" style={{ marginTop: "50px", marginBottom: "60px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                                            {teachers.map((teacher, idx) => (
                                              <div key={idx} className="tm-box-col-wrapper col-lg-4 col-sm-6 col-md-4 col-xs-12" style={{ marginBottom: "40px", display: "flex" }}>
                                                <div style={{ width: "100%", height: "100%" }}>
                                                  <IconBox 
                                                    type="team"
                                                    title={teacher.name}
                                                    subtitle={teacher.position}
                                                    image={teacher.image}
                                                    link={teacher.link}
                                                  />
                                                </div>
                                              </div>
                                            ))}
                                          </div>

                                        </div>
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
