/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import Logo from 'assets/svg/logo.svg';

import Container from 'components/Container';
import Navigation from 'components/Navigation';

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`m-0 py-4 ${scrollPosition > 10 && 'bg-blue transition-colors duration-150 ease-in-out'}`}>
      <Container className='flex items-center justify-between'>
        <NavLink
          to='/'
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
            marginLeft: 0,
          }}
        >
          <img src={Logo} className='logo-svg' width='190' height='30' alt='logo img' />
        </NavLink>
        <Navigation />
        {/* <div>
          <ul className='navbar-nav mb-lg-0 me-auto'>
            <li className='nav-item' role='presentation'>
              <NavLink to='/#what-we-do' className='nav-link'>
                {t('what-we-do')}
              </NavLink>
            </li>
            <li className='nav-item' role='presentation'>
              <NavLink to='/#about-us' className='nav-link'>
                {t('about-us')}
              </NavLink>
            </li>
            <li className='nav-item' role='presentation'>
              <NavLink to='/#contact-us' className='nav-link'>
                {t('contact')}
              </NavLink>
            </li>
          </ul>
        </div> */}
      </Container>
    </header>
  );
}

export default Header;
