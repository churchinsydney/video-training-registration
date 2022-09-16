import clsx from 'clsx';

import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

import { getLinks, getSettings, getTranslationsByNamespace } from '@/cms';
import { AppContext } from '@/context/AppContext';

import { Links, Settings, Translations } from '@/types/types';

export default function IndexPage({
  translations,
  links,
  settings,
}: {
  translations: Translations;
  links: Links;
  settings: Settings;
}) {
  const isLoaded = useLoaded();

  return (
    <AppContext.Provider
      value={{
        translations,
        links,
        settings,
      }}
    >
      <Layout>
        <Seo />
        <main>
          <section
            className={clsx(
              'min-h-main -mt-20 mb-20 flex flex-col justify-center',
              isLoaded && 'fade-in-start'
            )}
          >
            <article className='layout'>
              <h1
                className='mt-1 text-3xl md:text-5xl 2xl:text-6xl'
                data-fade='2'
                data-testid='home-verse'
              >
                Video Training Registration 2023
              </h1>
              <h2>
                <Accent>Crystallization-study of 1 and 2 Samuel</Accent>
              </h2>
              <h3>1 - 12 September 2023</h3>

              <div
                data-fade='5'
                className='mt-8 flex flex-wrap gap-4 md:!text-lg'
              >
                <div className='group relative'>
                  <div
                    className={clsx(
                      'dark:from-primary-200 dark:via-primary-300',
                      'opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200'
                    )}
                  />
                  <ButtonLink href='/signin'>To Register</ButtonLink>
                </div>
              </div>
            </article>
          </section>
        </main>
      </Layout>
    </AppContext.Provider>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      settings: await getSettings(),
      translations: await getTranslationsByNamespace(
        ['home', 'common', 'post'],
        locale
      ),
      links: await getLinks(locale),
    },
  };
}
