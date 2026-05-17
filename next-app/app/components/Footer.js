import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="colophon" className="site-footer">			
      <div className="footer_inner_wrapper footer tm-bg tm-bgcolor-transparent tm-bgimage-no tm-footer-cta-style1">
        <div className="site-footer-bg-layer tm-bg-layer"></div>
        <div className="site-footer-w">					
          <div className="footer-rows">
            <div className="footer-rows-inner">
              
              <div id="first-footer" className="sidebar-container first-footer tm-bg tm-bgcolor-darkgrey tm-textcolor-white tm-bgimage-yes tm-footerrow-sepnone tm-widgetsep-no" role="complementary">
                <div className="first-footer-bg-layer tm-bg-layer"></div>
                <div className="container tm-container-for-footer">
                  <div className="first-footer-inner">
                    <div className="row multi-columns-row">

                      <div className="widget-area col-xs-12 col-sm-4 col-md-4 col-lg-4 first-widget-area">
                        <aside className="tm-dancecontact widget widget_text enhanced-text-widget">
                          <h3 className="widget-title">Contactez-nous</h3>
                          <div className="textwidget widget-text">
                            <ul className="dance_contact_widget_wrapper">
                              <li className="themetechmount-contact-address"> 
                                <i className="tm-jassio-icon-location-pin tm-skincolor"></i>94 Chemin de la Peyrette, 31170 Tournefeuille
                              </li>

                              <li className="themetechmount-contact-phonenumber"> 
                                <i className="tm-jassio-icon-phone tm-skincolor"></i><a href="tel:+33624371811">06 24 37 18 11</a>
                              </li>

                              <li className="themetechmount-contact-email">
                                <i className="tm-jassio-icon-mail tm-skincolor"></i> <a href="mailto:engy31@hotmail.fr">engy31@hotmail.fr</a>
                              </li>

                              <li className="themetechmount-contact-email">
                                <i className="tm-jassio-icon-mail tm-skincolor"></i> <Link href="/mentions-legales">Mentions Légales</Link>
                              </li>
                            </ul>
                          </div>
                        </aside>							
                      </div>
                      
                      <div className="widget-area col-xs-12 col-sm-4 col-md-4 col-lg-4 first-widget-area">
                        <aside className="tm-dancefooter-logo widget widget_text enhanced-text-widget">
                          <div className="textwidget widget-text">
                            <div style={{ textAlign: 'center' }}>
                              <img src="/assets/logo4.png" alt="TEMPS DANCE" style={{ maxWidth: '180px', marginBottom: '20px' }} />
                              <div className="themetechmount-social-links-wrapper">
                                <ul className="social-icons" style={{ justifyContent: 'center', display: 'flex', gap: '15px' }}>
                                  <li className="tm-social-facebook"><a className="tooltip-top" target="_blank" href="https://www.facebook.com/E%CC%81cole-de-danse-Temps-Dance-104674314739110/" title="Facebook"><i className="tm-jassio-icon-facebook"></i></a></li>
                                  <li className="tm-social-instagram"><a className="tooltip-top" target="_blank" href="https://www.instagram.com/temps_dance/" title="Instagram"><i className="tm-jassio-icon-instagram"></i></a></li>
                                  <li className="tm-social-youtube"><a className="tooltip-top" target="_blank" href="https://www.youtube.com/channel/UCh42PNfDf0abcZDzb0wzJeQ" title="YouTube"><i className="tm-jassio-icon-youtube"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </aside>							
                      </div>
                      
                      <div className="widget-area col-xs-12 col-sm-4 col-md-4 col-lg-4 first-widget-area">
                        <aside className="widget widget_text enhanced-text-widget">
                          <h3 className="widget-title">Horaires</h3>
                          <div className="textwidget widget-text">
                            <p>Lundi au Vendredi : 17h00 - 21h30<br />Samedi : 10h00 - 13h00 / 14h00 - 18h00<br />Dimanche : Fermé</p>
                          </div>
                        </aside>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
          <div id="bottom-footer-text" className="bottom-footer-text tm-bottom-footer-text site-info tm-bg tm-bgcolor-custom tm-textcolor-white tm-bgimage-no tm-bordercolor-none">
            <div className="bottom-footer-bg-layer tm-bg-layer"></div>
            <div className="container tm-container-for-footer">
              <div className="bottom-footer-inner">
                <div className="row multi-columns-row">
                  <div className="col-xs-12 col-sm-12 tm-footer2-left" style={{ textAlign: 'center' }}>
                    2026 <Link href="/">TEMPS DANCE</Link> | Propulsé par <a href="http://mwcrea-agency.com" target="_blank" rel="noopener noreferrer">MWCREA AGENCY©</a>
                  </div>
                </div> 
              </div> 
            </div> 
          </div>				
        </div>
      </div>
    </footer>
  );
}
