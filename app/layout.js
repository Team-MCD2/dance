import React from 'react';
import "./globals.css";

export const metadata = {
  title: 'Temps Dance - École de Danse à Tournefeuille',
  description: 'École de danse Temps Dance à Tournefeuille. Cours de Modern Jazz, Hip-Hop, Classique, Contemporain, Eveil et initiation pour enfants, ados et adultes.',
  icons: {
    icon: '/assets/logo4.png',
    apple: '/assets/logo4.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Inter:wght@400;500;600;700&family=Oswald:wght@500;700&family=Roboto:wght@400;500&display=swap" />
        <link rel="stylesheet" href="/assets/content/themes/jassio/fonts/Abuget.css" />
        <link rel="stylesheet" href="/assets/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/bootstrap-theme.min.css" />
        <link rel="stylesheet" href="/assets/all.min.css" />
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
        <link rel="stylesheet" href="/assets/custom-navbar.css" />
        <script src="/assets/custom-navbar.js" defer></script>

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

          /* =====================================================
             SKINCOLOR ICON BOX STYLES (remplace le CSS SiteCore)
             Skincolor = #ff2a70 (rose)
          ===================================================== */

          /* Cercle fond rose */
          .themetechmount-icon-bgcolor-skincolor .themetechmount-iconbox-icon,
          .themetechmount-icon-bgcolor-skincolor .themetechmount-iconbox-icon .tm-box-icon,
          .themetechmount-icon-bgcolor-skincolor .tm-box-icon {
            background-color: #ff2a70 !important;
            border-color: #ff2a70 !important;
          }

          /* Icônes blanches */
          .themetechmount-iconcolor-white .themetechmount-iconbox-icon i,
          .themetechmount-iconcolor-white .tm-box-icon i,
          .themetechmount-iconcolor-white i {
            color: #ffffff !important;
          }

          /* Forme ronde */
          .tm-iconstyle-rounded .themetechmount-iconbox-icon,
          .tm-iconstyle-rounded .tm-box-icon {
            border-radius: 50% !important;
          }

          /* Dimensions du cercle */
          .themetechmount-iconbox-styleone .tm-box-icon {
            width: 70px !important;
            height: 70px !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            margin: 0 auto 16px !important;
          }

          .themetechmount-iconbox-styleone .tm-box-icon i {
            font-size: 28px !important;
            line-height: 1 !important;
          }

          /* Centrage */
          .tm-textalign-center .themetechmount-iconbox-inner {
            text-align: center !important;
          }

          .tm-textalign-center .themetechmount-iconbox-icon {
            display: flex !important;
            justify-content: center !important;
          }

          /* Hover */
          .themetechmount-iconbox:hover .tm-box-icon {
            transform: scale(1.08);
            transition: transform 0.25s ease;
          }

          /* Sous-titres rose */
          .tm-element-subhead {
            color: #ff2a70 !important;
          }

          /* Boutons skincolor */
          .tm-btn-color-skincolor .elementor-button,
          .tm-btn-color .elementor-button {
            background-color: #ff2a70 !important;
            border-color: #ff2a70 !important;
            color: #ffffff !important;
          }

          .tm-btn-color-skincolor .elementor-button:hover,
          .tm-btn-color .elementor-button:hover {
            background-color: #e01b5d !important;
          }
          /* Full Width Background Hack (For Albums Page Title) */
          .full-width-bg {
            position: relative;
            z-index: 1;
          }
          .full-width-bg::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: -50vw;
            width: 200vw;
            background: inherit;
            z-index: -1;
          }
        ` }} />
      </head>
      <body className="home page-template-default page page-id-249 wp-custom-logo jassio-jassio elementor-default elementor-kit-8 elementor-page elementor-page-249">
        {children}
      </body>
    </html>
  );
}
