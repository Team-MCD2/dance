import React from 'react';
import "./globals.css";

export const metadata = {
  title: 'Temps Dance - École de Danse à Tournefeuille',
  description: 'École de danse Temps Dance à Tournefeuille. Cours de Modern Jazz, Hip-Hop, Classique, Contemporain, Eveil et initiation pour enfants, ados et adultes.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald:700%2C500%7CRoboto:400&amp;display=swap" media="all" />
        <link rel="stylesheet" href="/assets/roboto.css" />
        <link rel="stylesheet" href="/assets/robotoslab.css" />
        <link rel="stylesheet" href="/assets/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/bootstrap-theme.min.css" />
        <link rel="stylesheet" href="/assets/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/all.min.css" />
        <link rel="stylesheet" href="/assets/regular.min.css" />
        <link rel="stylesheet" href="/assets/solid.min.css" />
        <link rel="stylesheet" href="/assets/v4-shims.min.css" />
        <link rel="stylesheet" href="/assets/flaticon.css" />
        <link rel="stylesheet" href="/assets/flexslider.css" />
        <link rel="stylesheet" href="/assets/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/perfect-scrollbar.min.css" />
        <link rel="stylesheet" href="/assets/prettyPhoto.css" />
        <link rel="stylesheet" href="/assets/slick.css" />
        <link rel="stylesheet" href="/assets/slick-theme.css" />
        <link rel="stylesheet" href="/assets/select2.min.css" />
        <link rel="stylesheet" href="/assets/chrisbracco-tooltip.min.css" />
        <link rel="stylesheet" href="/assets/tm-jassio-icons.css" />
        <link rel="stylesheet" href="/assets/elementor-icons.min.css" />
        <link rel="stylesheet" href="/assets/frontend.min.css" />
        <link rel="stylesheet" href="/assets/widget-image.min.css" />
        <link rel="stylesheet" href="/assets/widget-menu-anchor.min.css" />
        <link rel="stylesheet" href="/assets/widget-spacer.min.css" />
        <link rel="stylesheet" href="/assets/widget-video.min.css" />
        <link rel="stylesheet" href="/assets/post-23.css" />
        <link rel="stylesheet" href="/assets/post-249.css" />
        <link rel="stylesheet" href="/assets/rs6.css" />
        <link rel="stylesheet" href="/assets/main.min.css" />
        <link rel="stylesheet" href="/assets/base.min.css" />
        <link rel="stylesheet" href="/assets/responsive.min.css" />
        <link rel="stylesheet" href="/assets/multi-columns-row.css" />
        <link rel="stylesheet" href="/assets/styles.css" />
        <link rel="stylesheet" href="/assets/jassio-last-checkpoint.min.css" />
        <style dangerouslySetInnerHTML={{ __html: `
          body { margin: 0; padding: 0; }
          #root { width: 100%; }
          .elementor-section-stretched {
            width: 100% !important;
            left: 0 !important;
          }
          .themetechmount-slider-wrapper {
            position: relative;
            width: 100%;
            overflow: hidden;
          }
          #rev_slider_3_1_wrapper {
            width: 100% !important;
            position: relative !important;
            height: auto !important;
            min-height: 450px;
          }
          #rev_slider_3_1 {
            width: 100% !important;
            height: 100% !important;
          }
          @media (max-width: 768px) {
            #rev_slider_3_1_wrapper {
              min-height: 350px;
            }
          }
          @media (max-width: 1024px) {
            .site-header-menu .nav-menu {
              display: none;
              width: 100%;
              background: #fff;
              position: absolute;
              top: 100%;
              left: 0;
              box-shadow: 0 5px 15px rgba(0,0,0,0.1);
              z-index: 9999;
            }
            .site-header-menu .nav-menu.show {
              display: block;
            }
            .site-header-menu .nav-menu ul li a {
              padding: 12px 20px;
              display: block;
              border-bottom: 1px solid #eee;
              color: #333;
            }
            .menu-toggle {
              display: block !important;
              background: transparent;
              border: none;
              font-size: 24px;
              cursor: pointer;
              padding: 10px;
            }
          }
          @media (min-width: 1025px) {
            .menu-toggle {
              display: none !important;
            }
          }
        ` }} />
      </head>
      <body className="home page-template-default page page-id-249 wp-custom-logo jassio-jassio elementor-default elementor-kit-8 elementor-page elementor-page-249">
        {children}
      </body>
    </html>
  );
}
