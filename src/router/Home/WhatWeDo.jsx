import { useTranslation } from 'react-i18next';

import { HeadingOne, HeadingThree } from 'components/Headings';

function WhatWeDo() {
  const { t } = useTranslation();

  return (
    <section id='what-we-do'>
      <HeadingOne>{t('what-we-do')}</HeadingOne>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <div>
          <div className='what-we-do bg-dark-blue'>
            <HeadingThree>{t('software-as-service')}</HeadingThree>
            <p>
              <strong>{t('cloud-platform')}</strong> {t('created-with')} <strong>{t('smart-power-management-ltd')}</strong>,{' '}
              {t('software-as-service-description')}
            </p>
          </div>
        </div>
        <div>
          <div className='what-we-do bg-dark-orange'>
            <HeadingThree>{t('inovative-mini-hub-edge')}</HeadingThree>
            <p>
              <strong>{t('inovative-mini-hub-smart')}</strong> - {t('enabling')}
              <br />
              {t('inovative-mini-hub-description-a')}
              <br />
              {t('inovative-mini-hub-description-b')} <br />
              {t('inovative-mini-hub-description-c')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
