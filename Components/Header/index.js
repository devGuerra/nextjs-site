import React from 'react';
import Link from 'next/link';
import ReactGA from 'react-ga';

function Header(props) {
  return (
    <header>
      <div className="widthContainer">
        <ul>
          <li className="left">
            <Link
              href="/"
            >
              <a className="logo"
                onClick={() => ReactGA.event({
                  category: 'icon_header_logo',
                  action: 'click',
                })}>
                <img src="/newLogoColor.svg" alt="" />
                <span>Knots - Grupos do zap</span>
              </a>
            </Link>
          </li>
          <li className="right">
            <Link
              href="/new-group"

            >
              <a onClick={() => ReactGA.event({
                category: 'icon_header_adicionar',
                action: 'click',
              })}>Adicionar grupo</a>

            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.knotsgrupos"
              target="_blank"
              className="playstore"
              rel="noopener noreferrer"
              onClick={() => ReactGA.event({
                category: 'icon_header_playstore',
                action: 'click',
              })}
            >
              Baixe o Aplicativo
            </a>
            {/* <Link
              href="/approve"

            >
              <a >login</a>
            </Link> */}
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
