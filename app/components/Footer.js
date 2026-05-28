import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a1a1a', fontFamily: 'Inter, Arial, sans-serif' }}>

      {/* Main footer columns */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '55px 24px 45px', display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between' }}>

        {/* Col 1 — Contact */}
        <div style={{ flex: '1 1 220px', minWidth: '200px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 20px', fontFamily: 'Oswald, Arial, sans-serif', letterSpacing: '0.5px' }}>Contactez-nous</h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
            <li style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'flex-start', gap: '15px', borderBottom: '1px solid #2a2a2a', paddingBottom: '15px', marginBottom: '15px' }}>
              <i className="tm-jassio-icon-location-pin" style={{ color: '#ff2a70', marginTop: '2px', flexShrink: 0, fontSize: '16px' }}></i>
              <div>94 Chemin de la Peyrette, 31170<br />Tournefeuille</div>
            </li>
            <li style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', gap: '15px', borderBottom: '1px solid #2a2a2a', paddingBottom: '15px', marginBottom: '15px' }}>
              <i className="tm-jassio-icon-phone" style={{ color: '#ff2a70', flexShrink: 0, fontSize: '16px' }}></i>
              <a href="tel:+33624371811" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontWeight: '600', color: '#fff' }}>06 24 37 18 11</a>
            </li>
            <li style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', gap: '15px', borderBottom: '1px solid #2a2a2a', paddingBottom: '15px', marginBottom: '15px' }}>
              <i className="tm-jassio-icon-mail" style={{ color: '#ff2a70', flexShrink: 0, fontSize: '16px' }}></i>
              <a href="mailto:engy31@hotmail.fr" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontWeight: '600', color: '#fff' }}>engy31@hotmail.fr</a>
            </li>
          </ul>
        </div>

        {/* Col 2 — Logo + Social */}
        <div style={{ flex: '1 1 200px', minWidth: '180px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image src="/assets/logo4.png" alt="TEMPS DANCE" width={130} height={130} style={{ width: '130px', height: 'auto', marginBottom: '20px' }} />
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            {[
              { href: 'https://www.facebook.com/E%CC%81cole-de-danse-Temps-Dance-104674314739110/', icon: 'tm-jassio-icon-facebook' },
              { href: 'https://www.instagram.com/temps_dance/', icon: 'tm-jassio-icon-instagram' },
              { href: 'https://www.youtube.com/channel/UCh42PNfDf0abcZDzb0wzJeQ', icon: 'tm-jassio-icon-youtube' },
            ].map(({ href, icon }) => (
              <a key={icon} href={href} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', color: '#ffffff', textDecoration: 'none', fontSize: '14px', transition: 'border-color 0.2s, background 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#ff2a70'; e.currentTarget.style.backgroundColor = '#ff2a70'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Col 3 — Horaires */}
        <div style={{ flex: '1 1 200px', minWidth: '180px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 20px', fontFamily: 'Oswald, Arial, sans-serif', letterSpacing: '0.5px' }}>Horaires</h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.75)' }}>
            <li>Lundi – Vendredi<br /><strong style={{ color: '#fff' }}>17h00 – 21h30</strong></li>
            <li>Samedi<br /><strong style={{ color: '#fff' }}>10h–13h / 14h–18h</strong></li>
            <li style={{ color: 'rgba(255,255,255,0.45)' }}>Dimanche : Fermé</li>
          </ul>
        </div>

      </div>

      {/* Bottom bar — pink like original */}
      <div style={{ backgroundColor: '#ff2a70', padding: '14px 24px', textAlign: 'center', fontSize: '13px', color: '#ffffff' }}>
        2026 <Link href="/" style={{ color: '#ffffff', fontWeight: '700', textDecoration: 'none' }}>TEMPS DANCE</Link>
        {' | '}Développé par{' '}
        <a href="https://microdidact.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '600' }}>Microdidact</a>
      </div>

    </footer>
  );
}
