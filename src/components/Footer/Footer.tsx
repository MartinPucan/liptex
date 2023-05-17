import React from 'react';
import './Footer.scss';

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer className="footer">
      <section className="container">
        <div>
          Adresa
          <address className="mt-1">
            <div>Liptaň 300</div>
            <div>793 96 Liptaň</div>
            <div>Česká republika</div>
          </address>
        </div>
        <div>Odkazy</div>
        <div>Mapa</div>
      </section>
      <div className="copyright">© COPYRIGHT LIPTEX trading s.r.o. 2008 - {year}</div>
    </footer>
  );
};

export default Footer;
