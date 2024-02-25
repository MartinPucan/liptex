import React, { FC } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import { Link, useLocation } from 'react-router-dom';
import { ROUTE } from '../../constants/routes';

interface IHeader {
    className?: string;
}
export const Header: FC<IHeader> = ({ className }) => {
    const isDesktop = useMediaQuery('only screen and (min-width : 901px)');

    const { pathname } = useLocation();

    const getLinkClassName = (link: string, customLink?: string) => {
        let className = customLink ?? 'item';

        return pathname === link ? `${className} active` : className;
    };

    return (
        <header className={['header', className].join(' ')}>
            <nav className="nav">
                <Link className="logo" to={ROUTE.HOME}>
                    LIPTEX
                </Link>
                <div className="links">
                    <span className="item">
                        {isDesktop ? (
                            <Link to={ROUTE.HOME} className={getLinkClassName(ROUTE.HOME)}>
                                Úvod
                            </Link>
                        ) : (
                            <i className="fa-solid fa-house" />
                        )}
                    </span>
                    <span className="item">
                        {isDesktop ? (
                            <Link to={ROUTE.ABOUT_US} className={getLinkClassName(ROUTE.ABOUT_US)}>
                                O nás
                            </Link>
                        ) : (
                            <i className="fa-solid fa-circle-info" />
                        )}
                    </span>
                    <span className="item">
                        {isDesktop ? (
                            <Link to={ROUTE.REQUEST} className={getLinkClassName(ROUTE.REQUEST)}>
                                Poptávka
                            </Link>
                        ) : (
                            <i className="fa-solid fa-store" />
                        )}
                    </span>
                </div>
                <div className="menu">
                    <button className="menu--btn">
                        {isDesktop ? (
                            <Link to={ROUTE.CONTACT} className={getLinkClassName(ROUTE.REQUEST, 'item--btn')}>
                                Kontakt
                            </Link>
                        ) : (
                            <i className="fa-solid fa-phone" />
                        )}
                    </button>
                    <div className="toggle-menu"></div>
                </div>
            </nav>
        </header>
    );
};
