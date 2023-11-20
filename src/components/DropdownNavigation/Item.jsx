import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Item({ href, children, setIsOpen }) {
  const location = useLocation();
  const isActive = useMemo(() => location.hash === `#${href}`, [href, location.hash]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <DropdownMenu.Item
      className={`relative flex h-[25px] select-none items-center justify-end rounded-[3px] px-[5px] text-[13px] leading-none ${
        isActive ? 'text-orange' : 'text-white'
      } outline-none`}
    >
      <NavLink
        to={`/#${href}`}
        onClick={() => {
          scrollToSection(href);
          setIsOpen(false);
        }}
      >
        {children}
      </NavLink>
    </DropdownMenu.Item>
  );
}

export default Item;
