import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { NavLink } from 'react-router-dom';

function NavItem({ href, children }) {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link className='select-none p-2 text-[16px] leading-none text-white no-underline outline-none transition-all duration-300 ease-in-out hover:text-orange'>
        <NavLink to={href}>{children}</NavLink>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
}

export default NavItem;
