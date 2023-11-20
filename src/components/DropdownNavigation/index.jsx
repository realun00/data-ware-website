import { useEffect, useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useTranslation } from 'react-i18next';

import { useLocation } from 'react-router-dom';
import Item from './Item';

function Render({ scrollPosition }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const link = sectionId.replace(/#/g, '');
    const section = document.getElementById(link);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (location.hash) {
      scrollToSection(location.hash);
    }
  }, [location.hash]);

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={(e) => setIsOpen(e)}>
      <DropdownMenu.Trigger asChild>
        <button
          className='inline-flex h-[50px] w-[50px] items-center justify-center rounded-md bg-transparent text-black outline-none'
          aria-label='Customise options'
          type='button'
        >
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={`z-[200] w-screen pr-[25px] ${scrollPosition > 10 ? 'bg-blue' : 'bg-transparent'} p-[5px]`}>
          <Item href='what-we-do' setIsOpen={setIsOpen}>
            {t('what-we-do')}
          </Item>
          <Item href='about-us' setIsOpen={setIsOpen}>
            {t('about-us')}
          </Item>
          <Item href='contact-us' setIsOpen={setIsOpen}>
            {t('contact')}
          </Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default Render;
