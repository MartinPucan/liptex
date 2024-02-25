import React from 'react';

export const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();

    return (
        <footer className="footer">
            <section className="container">
                <div>
                    <span className="footer--title">Adresa</span>
                    <address className="mt-1">
                        <div>Liptaň 300</div>
                        <div>793 96 Liptaň</div>
                        <div>Česká republika</div>
                    </address>
                </div>
                <div>
                    <span className="footer--title">Odkazy</span>
                </div>
                <div>
                    <span className="footer--title">Mapa</span>
                </div>
            </section>
            <div className="copyright">© COPYRIGHT LIPTEX trading s.r.o. 2008 - {year}</div>
        </footer>
    );
};
