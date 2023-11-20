import { useTranslation } from 'react-i18next';

import { HeadingOne } from 'components/Headings';

function About() {
  const { t } = useTranslation();

  return (
    <section id='about-us'>
      <HeadingOne>{t('about-us')}</HeadingOne>
      <p className='max-w-[680px]'>
        <strong>{t('we')}</strong> {t('about-us-description')}
      </p>
      <div id='contact-us'>
        <span>
          <strong>{t('email')}: </strong>
          <a className='text-decoration-none' href='mailto:office@data-ware.eu?subject = Feedback&body = Message'>
            office@data-ware.eu
          </a>
        </span>
        <br />
        <span>
          <strong>{t('address')}: </strong>
          <a
            className='text-decoration-none'
            target='_blank'
            rel='noreferrer'
            href='https://www.google.com/maps/place/ul.+%22Kapitan+Raycho+Nikolov%22+56,+4000+Kamenitsa+1,+Plovdiv/@42.142175,24.7560292,3a,75y,158.24h,91.24t/data=!3m6!1e1!3m4!1szRJpwnnUP9ydB-5gpGyDgw!2e0!7i16384!8i8192!4m6!3m5!1s0x14acd1a6740a5a75:0xf2d0a1240904e024!8m2!3d42.1416745!4d24.7563112!16s%2Fg%2F11bw3ws2t0'
          >
            {t('grand-center')}
          </a>
        </span>
      </div>
    </section>
  );
}

export default About;
