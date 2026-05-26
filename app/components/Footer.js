import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#f5f5f7', borderTop: '1px solid #e8e8ed', fontFamily: 'Inter, Arial, sans-serif' }}>

      {/* Main footer columns */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px 50px', display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between' }}>

        {/* Col 1 — Logo + Social */}
        <div style={{ flex: '1 1 200px', minWidth: '180px', textAlign: 'center' }}>
          <Image src="/assets/logo4.png" alt="TEMPS DANCE" width={120} height={120} style={{ width: '120px', height: 'auto', marginBottom: '16px' }} />
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '8px' }}>
            <a href="https://www.facebook.com/E%CC%81cole-de-danse-Temps-Dance-104674314739110/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #e8e8ed', color: '#6e6e73', textDecoration: 'none', fontSize: '14px', transition: 'border-color 0.2s, color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#ff2a70'; e.currentTarget.style.color = '#ff2a70'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e8ed'; e.currentTarget.style.color = '#6e6e73'; }}>
              <i className="tm-jassio-icon-facebook"></i>
            </a>
            <a href="https://www.instagram.com/temps_dance/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #e8e8ed', color: '#6e6e73', textDecoration: 'none', fontSize: '14px', transition: 'border-color 0.2s, color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#ff2a70'; e.currentTarget.style.color = '#ff2a70'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e8ed'; e.currentTarget.style.color = '#6e6e73'; }}>
              <i className="tm-jassio-icon-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCh42PNfDf0abcZDzb0wzJeQ" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #e8e8ed', color: '#6e6e73', textDecoration: 'none', fontSize: '14px', transition: 'border-color 0.2s, color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#ff2a70'; e.currentTarget.style.color = '#ff2a70'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e8ed'; e.currentTarget.style.color = '#6e6e73'; }}>
              <i className="tm-jassio-icon-youtube"></i>
            </a>
          </div>
        </div>

        {/* Col 2 — Contact */}
        <div style={{ flex: '1 1 200px', minWidth: '180px' }}>
          <h4 style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#ff2a70', margin: '0 0 18px' }}>Contactez-nous</h4>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ fontSize: '14px', color: '#1d1d1f', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <i className="tm-jassio-icon-location-pin" style={{ color: '#ff2a70', marginTop: '2px', flexShrink: 0 }}></i>
              94 Chemin de la Peyrette,<br />31170 Tournefeuille
            </li>
            <li style={{ fontSize: '14px', color: '#1d1d1f', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="tm-jassio-icon-phone" style={{ color: '#ff2a70', flexShrink: 0 }}></i>
              <a href="tel:+33624371811" style={{ color: '#1d1d1f', textDecoration: 'none' }}>06 24 37 18 11</a>
            </li>
            <li style={{ fontSize: '14px', color: '#1d1d1f', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="tm-jassio-icon-mail" style={{ color: '#ff2a70', flexShrink: 0 }}></i>
              <a href="mailto:engy31@hotmail.fr" style={{ color: '#1d1d1f', textDecoration: 'none' }}>engy31@hotmail.fr</a>
            </li>
          </ul>
        </div>

        {/* Col 3 — Horaires */}
        <div style={{ flex: '1 1 200px', minWidth: '180px' }}>
          <h4 style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#ff2a70', margin: '0 0 18px' }}>Horaires</h4>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#1d1d1f' }}>
            <li>Lundi – Vendredi : <strong>17h – 21h30</strong></li>
            <li>Samedi : <strong>10h–13h / 14h–18h</strong></li>
            <li style={{ color: '#6e6e73' }}>Dimanche : Fermé</li>
          </ul>
        </div>

        {/* Col 4 — Liens */}
        <div style={{ flex: '1 1 160px', minWidth: '140px' }}>
          <h4 style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#ff2a70', margin: '0 0 18px' }}>Liens</h4>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[['Nos Cours', '/nos-cours-2'], ['Les Professeurs', '/les-professeurs'], ['Planning & Tarifs', '/planning-tarifs'], ['Livre D\'Or', '/livre-d-or'], ['Contact', '/contact'], ['Mentions Légales', '/mentions-legales']].map(([label, href]) => (
              <li key={href}><Link href={href} style={{ fontSize: '14px', color: '#1d1d1f', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#ff2a70'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#1d1d1f'; }}
              >{label}</Link></li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #e8e8ed', backgroundColor: '#fff', padding: '16px 24px', textAlign: 'center', fontSize: '13px', color: '#6e6e73' }}>
        2026 <Link href="/" style={{ color: '#1d1d1f', fontWeight: '600', textDecoration: 'none' }}>TEMPS DANCE</Link>
        {' '}·{' '}
        <a href="http://mwcrea-agency.com" target="_blank" rel="noopener noreferrer" style={{ color: '#6e6e73', textDecoration: 'none' }}>MWCREA AGENCY©</a>
      </div>

    </footer>
  );
}
