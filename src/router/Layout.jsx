import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Footer } from 'components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';

/**
 * Renders the header with the content of the routes
 *
 * @method Layout
 */
function Layout() {
  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 200) {
        document.querySelector('.back-to-top').classList.add('visible');
      } else {
        document.querySelector('.back-to-top').classList.remove('visible');
      }
    });
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <button type='button' onClick={scrollToTop} className='back-to-top' aria-label='scroll-to-top'>
        <FontAwesomeIcon icon={faCircleArrowUp} />
      </button>
    </>
  );
}

export default Layout;
