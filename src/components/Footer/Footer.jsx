import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';

import { githubButtons } from '../../mock/data';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;

  return (
    <section id='footer' style={{padding:'0px 0px'}}>
    <footer className="footer navbar-static-bottom">
      <Container>
        <a href="#top" aria-label="Back To Top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
        </a>
        <div className="social-links">
          {networks &&
            networks.map(network => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
         Source code for this site:{' '}
          <a href="https://github.com/ForTheOnesThere/fortheonesthere.github.io" target="_blank" rel="noopener noreferrer">
          ForTheOnesThere
          {/*  Original Template by Jacobo Martínez, modified under the MIT license*/}
        </a>
        </p>

        {isEnabled && <GithubButtons />}
      </Container>
    </footer>
    </section>

  );
};

export default Footer;
