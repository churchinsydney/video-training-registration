import Layout from '@/components/layout/Layout';

import { getSettings, getTranslationsByNamespace } from '@/cms';
import { AppContext } from '@/context/AppContext';

import { Settings, Translations } from '@/types/types';

export default function NewUser({
  translations,
  settings,
}: {
  translations: Translations;
  settings: Settings;
}) {
  return (
    <AppContext.Provider
      value={{
        translations,
        settings,
      }}
    >
      <Layout>
        <section className='flex h-screen items-center bg-gray-50 dark:bg-gray-900'>
          <div className='mx-auto max-w-screen-xl px-4 py-8 lg:grid lg:grid-cols-12 lg:gap-20 lg:py-16'>
            New User
          </div>
        </section>
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
      // links: await getLinks(locale),
    },
  };
}
