import Image from 'next/image';
import { BuiltInProviderType } from 'next-auth/providers';
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from 'next-auth/react';

import Layout from '@/components/layout/Layout';

export default function NewUser() {
  return (
    <Layout>
      <section className='flex h-screen items-center bg-gray-50 dark:bg-gray-900'>
        <div className='mx-auto max-w-screen-xl px-4 py-8 lg:grid lg:grid-cols-12 lg:gap-20 lg:py-16'>
          New User
        </div>
      </section>
    </Layout>
  );
}

// export async function getServerSideProps(context: any) {
//   const providers = await getProviders();
//   return {
//     props: { providers },
//   };
// }
