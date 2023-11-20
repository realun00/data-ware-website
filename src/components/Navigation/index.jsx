import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import { useTranslation } from 'react-i18next';

import NavItem from './NavItem';

function Render() {
  const { t } = useTranslation();

  return (
    <NavigationMenu.Root className='relative flex w-full justify-end'>
      <NavigationMenu.List className='center m-0 flex list-none bg-transparent p-1'>
        <NavItem href='/#what-we-do'>{t('what-we-do')}</NavItem>
        <NavItem href='/#about-us'>{t('about-us')}</NavItem>
        <NavItem href='/#contact'>{t('contact')}</NavItem>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

export default Render;
