"use client";

import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import IconBox from "../components/IconBox";
import Link from 'next/link';

export default function NosCoursPage() {
  const courses = [
    { id: 'Jazz', title: 'Jazz Cabaret', age: 'À partir de 16 ans', icon: 'flaticon-tap-dance' },
    { id: 'CONTEMPORAIN2', title: 'Contemporain', age: 'À partir de 12 ans', icon: 'flaticon-dancing' },
    { id: 'BREAK', title: 'Break Dance', age: 'À partir de 6 ans', icon: 'flaticon-dancing-3' },
    { id: 'Zumba', title: "Afro Kid's", age: 'À partir de 4 ans', icon: 'flaticon-dancing-4' },
    { id: 'HIPHOP', title: 'Hip-Hop (Commercial)', age: 'À partir de 6 ans', icon: 'flaticon-dancing-1' },
    { id: 'EVEIL', title: 'Éveil à la Danse', age: 'À partir de 3 ans', icon: 'flaticon-dancing' },
    { id: 'CABARET', title: 'Cabaret (Talons)', age: 'À partir de 16 ans', icon: 'flaticon-tap-dance' },
    { id: 'STREET', title: 'Street Jazz', age: 'À partir de 6 ans', icon: 'flaticon-dancing-4' },
    { id: 'DANCEHALL', title: 'Dance Hall', age: 'À partir de 8 ans', icon: 'flaticon-dancing-1' },
    { id: 'PILATES', title: 'Pilates', age: 'À partir de 16 ans', icon: 'flaticon-dancing' },
    { id: 'CUISSES', title: 'Circuit Training', age: 'À partir de 16 ans', icon: 'fas fa-walking' },
    { id: 'TISSU', title: 'Tissu Aérien', age: 'À partir de 6 ans', icon: 'flaticon-pole-dance' },
    { id: 'CLASSIQUE', title: 'Classique initiation et élémentaire', age: 'À partir de 6 ans', icon: 'flaticon-dancing-1', link: '/nos-cours-2' },
    { id: 'YOGA', title: 'Yoga', age: 'À partir de 16 ans', icon: 'far fa-grin', link: '/nos-cours-2' },
  ];

  const courseDetails = [
    {
      id: 'Jazz',
      title: 'JAZZ CABARET',
      desc: 'Entre le Street Jazz et le Cabaret vous allez vous régaler en dansant des chorégraphies techniques et très surprenantes sur vos talons. Des chorégraphies des musiques actuelles ( Beyonce, Britney…) Laissez vous tenter par cette nouvelle discipline qui fait ravage auprès de ces demoiselles ! et à vos talons….',
      video: 'https://www.youtube.com/embed/PoCda6JTGkE',
      reverse: false
    },
    {
      id: 'CONTEMPORAIN2',
      title: 'CONTEMPORAIN',
      desc: 'Tout d’abord le mot « contemporain » signifie une chose actuelle, de notre temps. Ensuite, la danse se définit quand a elle comme une suite de mouvements rythmés du coprs. Ainsi, danse contemporaine se caractérise par une gestuelle nourrie par le temps, l’histoire, mais aussi l’expérience et la personnalité de ceux qui la pratique. Cette discipline est par définition très large d’ouverture et ces principes fondamentaux s’axent autour de: l’expérimentation du temps de l’énergie du transfert de poids de la sensation et du ressenti de l’appréhension de l’espace.',
      video: 'https://www.youtube.com/embed/HYkT67vOf_Y',
      reverse: true
    },
    {
      id: 'BREAK',
      title: 'BREAK DANCE',
      desc: 'Style de danse au sol née dans les ghettos des États-Unis, dans les années 1970, caractérisé par des mouvements acrobatiques, exécutés autour d’un point de repère, parfois sur un accompagnement de musique rap.',
      video: 'https://www.youtube.com/embed/VAP7-70j-Mg',
      reverse: false
    },
    {
      id: 'Zumba',
      title: "AFRO KID'S",
      desc: 'Afro Kids est un cours de danse ludique et dynamique pour les enfants de 4 à 12 ans, inspiré des rythmes et cultures africaines. À travers des chorégraphies entraînantes et une ambiance festive, les enfants développent leur coordination, leur confiance en eux et leur sens du rythme tout en s’amusant. Ce programme encourage l’expression corporelle, l’esprit d’équipe et la découverte culturelle dans un cadre bienveillant et sécurisé.',
      video: null,
      reverse: true
    },
    {
      id: 'HIPHOP',
      title: 'HIP-HOP',
      desc: 'Une danse caractérisée par son aspect acrobatique et ses figures qui s’inspirent en partie du funk styles « Popping, looking, boogaloo, top-rock, figures au sol »',
      video: 'https://www.youtube.com/embed/HFRsSdvRiOM',
      reverse: false
    },
    {
      id: 'EVEIL',
      title: 'ÉVEIL À LA DANSE',
      desc: 'L’éveil à la danse permet à l’enfant dès 3 ans, de prendre conscience de son corps, du rythme, des mouvements et de l’écoute afin de s’épanouir et de prendre goût à la danse. Approche de la danse par le mouvement sous forme de jeux et d’amusements.',
      video: 'https://www.youtube.com/embed/u8gXwG0w0nc',
      reverse: true
    },
    {
      id: 'CABARET',
      title: 'CABARET',
      desc: 'Nouveaux styles de danse entre « plumes, strass, paillettes …. talons » Une danse pour dévoilé sa féminité tout simplement. Chorégraphies avec chaises, eventailles, barres, cannes, tabourets…',
      video: 'https://www.youtube.com/embed/MDbpsOVq5DQ',
      reverse: false
    },
    {
      id: 'STREET',
      title: 'STREET JAZZ',
      desc: 'Moyen d’expression corporelle qui englobe toutes sortes de danses « Jazz, Hip-Hop, Néo-classique, modern jazz » pour s’approprier son propre style…',
      video: 'https://www.youtube.com/embed/C9-009qWUzY',
      reverse: true
    },
    {
      id: 'DANCEHALL',
      title: 'DANCEHALL',
      desc: 'Le Ragga Dancehall encore appelé Raggamuffin est la variante la plus populaire du Dancehall en Jamaïque actuellement. Il s’agit de DJ posant sur des rythmes hardcore, c’est à dire des mouvements plus marqués que le Reggae. Les professeurs de Dancehall sont des danseurs de talent et surtout fin technicien et ne laisseront rien au hasard et vous permettront de vous transmettre leur savoir.',
      video: 'https://www.youtube.com/embed/9JI4Ou3ZyNA',
      reverse: false
    },
    {
      id: 'PILATES',
      title: 'PILATES',
      desc: 'La méthode pilates est une gymnastique douce qui est composée d’un ensemble d’exercices posturaux et en mouvements. Ces exercices ont pour but de renforcer et d’étirer nos muscles profonds et stabilisateurs afin d’optimiser l’utilisation de nos muscles apparents et d’améliorer notre alignement corporel.',
      video: 'https://www.youtube.com/embed/6sVr7vPRvnY',
      reverse: true
    },
    {
      id: 'CUISSES',
      title: 'CIRCUIT TRAINING',
      desc: 'Cours en musique pour muscler, travailler, renforcer et tonifier son corps tout au long de l’année avec un suivie personnalisé : Pour les cuisses, abdos et fessiers.',
      video: 'https://www.youtube.com/embed/npbsAZgqDTM',
      reverse: false
    },
    {
      id: 'TISSU',
      title: 'TISSU AÉRIEN',
      desc: 'Une expérience extraordinaire à faire une fois dans sa vie ! L’impression de voler et flotter dans les airs en faisant des acrobaties simples suivant votre niveau.',
      video: 'https://www.youtube.com/embed/6sVr7vPRvnY',
      reverse: true
    },
    {
      id: 'INITIATION',
      title: 'CLASSIQUE INITIATION ET ÉLÉMENTAIRE',
      desc: 'Les cours, très vivants et très dansés, ont pour objectif de donner aux élèves une solide base technique pour les exercices et enchainements proposés et surtout le plaisir de danser, de progresser et de se dépasser dans une ambiance chaleureuse.',
      video: 'https://www.youtube.com/embed/u8gXwG0w0nc',
      reverse: false
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
                    <article className="post-6949 page type-page status-publish hentry" id="post-6949">
                      <header className="single-entry-header tm-hide">
                        <h2 className="entry-title">Nos Cours</h2>
                      </header>
                      
                      <div className="entry-content">
                        <div className="elementor elementor-6949">
                          
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

                          {/* Presentation Title */}
                          <section className="elementor-section elementor-top-section elementor-element elementor-section-stretched tm-column-break-ipad-no tm-col-stretched-none elementor-section-boxed elementor-section-height-default">
                            <div className="elementor-container elementor-column-gap-no">
                              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element tm-align-center elementor-widget elementor-widget-tm_heading">
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

                                  {/* Course Grid Icons */}
                                  <div className="elementor-section elementor-inner-section elementor-element tm-column-break-ipad-no tm-col-stretched-none elementor-section-boxed elementor-section-height-default" style={{ marginTop: "40px", marginBottom: "40px" }}>
                                    <div className="row" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                                      {courses.map((course, idx) => (
                                        <div key={idx} className="col-xs-12 col-sm-6 col-md-3" style={{ marginBottom: "30px" }}>
                                          <div className="elementor-widget-container" style={{ height: "100%" }}>
                                            <IconBox 
                                              type="icon"
                                              title={course.title}
                                              subtitle={course.age}
                                              icon={course.icon}
                                              link={course.link || `#${course.id}`}
                                            />
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </section>

                          {/* Course Detailed Sections */}
                          {courseDetails.map((detail, idx) => (
                            <section key={detail.id} id={detail.id} className="elementor-section elementor-top-section elementor-element tm-column-break-ipad-no tm-col-stretched-none elementor-section-boxed elementor-section-height-default" style={{ paddingTop: "60px", paddingBottom: "60px", borderBottom: "1px solid #eee", backgroundColor: idx % 2 === 1 ? '#f8f9fa' : '#ffffff' }}>
                              <div className="elementor-container elementor-column-gap-default">
                                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element">
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    {detail.video === null ? (
                                      <div className="row course-detail-row" style={{ display: "flex", justifyContent: "center" }}>
                                        <div className="col-xs-12 col-md-10" style={{ textAlign: "center" }}>
                                          <div className="elementor-element tm-align-center elementor-widget elementor-widget-tm_heading">
                                            <div className="elementor-widget-container">
                                              <div className="tm-element-heading-content-wrapper center-align tm-reverse-heading-yes tm-seperator-none tm-heading-style-vertical">
                                                <div className="tm-content-header">
                                                  <h4 className="tm-element-subhead">NOS COURS</h4>
                                                  <h5 className="tm-element-overlay-subhead">Temps Dance</h5>
                                                  <h2 className="tm-element-content-heading">{detail.title}</h2>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="elementor-element elementor-widget elementor-widget-text-editor" style={{ marginTop: "20px", marginBottom: "30px", fontSize: "16px", lineHeight: "28px" }}>
                                            <div className="elementor-widget-container">
                                              <p>{detail.desc}</p>
                                            </div>
                                          </div>
                                          <div className="elementor-element tm-btn-color-skincolor tm-btn-style-flat tm-btn-shape-square elementor-widget elementor-widget-button">
                                            <div className="elementor-widget-container">
                                              <div className="elementor-button-wrapper">
                                                <Link href="/planning-tarifs" className="elementor-button elementor-button-link elementor-size-sm" style={{ padding: "12px 30px", borderRadius: "6px", backgroundColor: "#ff2a70", color: "#fff", fontWeight: "bold", display: "inline-block" }}>
                                                  <span className="elementor-button-content-wrapper">
                                                    <span className="elementor-button-text">Planning &amp; Tarifs</span>
                                                  </span>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="row course-detail-row" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", flexDirection: detail.reverse ? "row-reverse" : "row" }}>
                                        
                                        {/* Video Column */}
                                        <div className="col-xs-12 col-md-6 course-video-col" style={{ marginBottom: "30px" }}>
                                          <div className="elementor-widget-container" style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                                            <div className="elementor-wrapper elementor-open-inline" style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                                              <iframe 
                                                src={detail.video} 
                                                title={detail.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                allowFullScreen
                                                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                                              ></iframe>
                                            </div>
                                          </div>
                                        </div>

                                        {/* Text Column */}
                                        <div className="col-xs-12 col-md-6 course-text-col" style={{ paddingLeft: detail.reverse ? "15px" : "40px", paddingRight: detail.reverse ? "40px" : "15px", marginBottom: "30px" }}>
                                          <div className="elementor-element tm-align-left elementor-widget elementor-widget-tm_heading">
                                            <div className="elementor-widget-container">
                                              <div className="tm-element-heading-content-wrapper left-align tm-reverse-heading-yes tm-seperator-none tm-heading-style-vertical">
                                                <div className="tm-content-header">
                                                  <h4 className="tm-element-subhead">NOS COURS</h4>
                                                  <h5 className="tm-element-overlay-subhead">Temps Dance</h5>
                                                  <h2 className="tm-element-content-heading">{detail.title}</h2>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="elementor-element elementor-widget elementor-widget-text-editor" style={{ marginTop: "20px", marginBottom: "30px", fontSize: "16px", lineHeight: "28px" }}>
                                            <div className="elementor-widget-container">
                                              <p>{detail.desc}</p>
                                            </div>
                                          </div>
                                          <div className="elementor-element tm-btn-color-skincolor tm-btn-style-flat tm-btn-shape-square elementor-widget elementor-widget-button">
                                            <div className="elementor-widget-container">
                                              <div className="elementor-button-wrapper">
                                                <Link href="/planning-tarifs" className="elementor-button elementor-button-link elementor-size-sm" style={{ padding: "12px 30px", borderRadius: "6px", backgroundColor: "#ff2a70", color: "#fff", fontWeight: "bold", display: "inline-block" }}>
                                                  <span className="elementor-button-content-wrapper">
                                                    <span className="elementor-button-text">Planning &amp; Tarifs</span>
                                                  </span>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </section>
                          ))}

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
