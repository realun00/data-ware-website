/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import Logo from 'assets/svg/logo.svg';

import Container from 'components/Container';
import Navigation from 'components/Navigation';
import DropdownNavigation from 'components/DropdownNavigation';
import useWindowSize from 'hooks/useWindowsSize';

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const { width } = useWindowSize();

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    });
  };

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
      <Container className='height-full flex items-center justify-between'>
        <NavLink
          to='/'
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
            marginLeft: 0,
          }}
          onClick={() => scrollPosition > 10 && scrollToTop()}
        >
          <img src={Logo} className='logo-svg' width='190' height='30' alt='logo img' />
        </NavLink>
        {width > 600 ? <Navigation /> : <DropdownNavigation scrollPosition={scrollPosition} />}
      </Container>
    </header>
  );
}

export default Header;
