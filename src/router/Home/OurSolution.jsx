import CloudSchemaImage from 'assets/cloud-schema.png';
import { HeadingOne } from 'components/Headings';
import { useTranslation } from 'react-i18next';

function OurSolution() {
  const { t } = useTranslation();
  return (
    <section id='our-solution'>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
        <div className='col-span-2 p-4 lg:col-span-1'>
          {' '}
          <HeadingOne>
            <span className='text-orange'>&rdquo;</span>
            {t('from-data-to-solutions')}
          </HeadingOne>
          <p>{t('from-data-to-solutions-description-1')}</p>
          <p>{t('from-data-to-solutions-description-2')}</p>
        </div>
        <div className='col-span-2 flex justify-center p-4 lg:col-span-1'>
          <img src={CloudSchemaImage} alt='Cloud Schema' />
        </div>
      </div>
    </section>
  );
}

export default OurSolution;
