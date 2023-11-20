import { useTranslation } from 'react-i18next';

import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

import useLanguage from 'hooks/useLanguage';

import usIcon from 'assets/us.png';
import bgIcon from 'assets/bg.png';
import Logo from 'assets/svg/logo.svg';

import Container from 'components/Container';

function Footer({ siteTitle }) {
  const { t } = useTranslation();

  const { setLanguage, changeLanguage } = useLanguage();

  return (
    <footer>
      <Container className='flex flex-wrap justify-between'>
        <div className='flex flex-col justify-between'>
          <div className='mb-3 flex items-center justify-between'>
            <NavLink
              to='/'
              style={{
                fontSize: `var(--font-sm)`,
                textDecoration: `none`,
              }}
            >
              <img src={Logo} className='logo-svg' width='190' height='30' alt='logo img' />
            </NavLink>
            <div>
              <button
                onClick={() => {
                  changeLanguage('Bulgarian');
                  setLanguage('Bulgarian');
                }}
                className='change-language-button'
                type='button'
              >
                <img src={bgIcon} alt='bg img' />
              </button>

              <button
                onClick={() => {
                  changeLanguage('English');
                  setLanguage('English');
                }}
                className='change-language-button'
                type='button'
              >
                <img src={usIcon} alt='en img' style={{ marginLeft: '5px' }} />
              </button>
            </div>
          </div>
          <span className='company-info'>{t('description')}</span>
        </div>
        <div className='flex flex-col justify-between'>
          <div>
            <h4 className='text-[24px] font-semibold'>{t('site-info')}</h4>
            <div className='text-[14px]	font-semibold'>
              <NavLink to='/'>{t('terms-and-cond')}</NavLink>
              <br />
              <NavLink to='/'>{t('privacy-policy')}</NavLink>
              <br />
              <NavLink to='/'>{t('security')}</NavLink>
            </div>
          </div>
          <div>
            <div className='footer-socials'>
              <a href='https://twitter.com' target='_blank' rel='noreferrer' aria-label='twitter link'>
                <FontAwesomeIcon icon={faTwitter} alt='twitter img' />
              </a>
              <a href='https://facebook.com' target='_blank' rel='noreferrer' aria-label='facebook link'>
                <FontAwesomeIcon icon={faFacebook} alt='facebook img' />
              </a>
              <a href='https://instagram.com' target='_blank' rel='noreferrer' aria-label='instagram link'>
                <FontAwesomeIcon icon={faInstagram} alt='instagram img' />
              </a>
              <a href='https://linkedin.com' target='_blank' rel='noreferrer' aria-label='linkedin link'>
                <FontAwesomeIcon icon={faLinkedinIn} alt='linkedin img' />
              </a>
            </div>
            <span className='copyright'>
              {siteTitle} © {new Date().getFullYear()} &middot; {t('copyrights')}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
