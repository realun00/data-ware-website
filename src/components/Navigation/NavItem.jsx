import { useEffect, useMemo } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { NavLink, useLocation } from 'react-router-dom';

function NavItem({ href, children }) {
  const location = useLocation();
  const isActive = useMemo(() => location.hash === `#${href}`, [href, location.hash]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (isActive && href) {
      scrollToSection(href);
    }
  }, [href, isActive]);

  return (
    <NavigationMenu.Item>
      <NavLink
        className={`select-none p-2 text-[16px] leading-none ${
          isActive ? 'text-orange' : 'text-white'
        } no-underline outline-none transition-all duration-300 ease-in-out hover:text-orange`}
        to={`/#${href}`}
        onClick={() => scrollToSection(href)}
      >
        {children}
      </NavLink>
    </NavigationMenu.Item>
  );
}

export default NavItem;
