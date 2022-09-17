/* eslint-disable @next/next/no-img-element */
import { Avatar, Dropdown } from 'flowbite-react';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function SignInStatus() {
  const { data: session, status } = useSession();

  console.log('session', session, status);
  return (
    <div>
      {session?.user && (
        <>
          <Dropdown
            label={
              <Avatar alt='' img={session.user.image || ''} rounded={true} />
            }
            arrowIcon={false}
            inline={true}
          >
            <Dropdown.Header>
              <span className='block text-sm'>{session.user.name}</span>
              <span className='block truncate text-sm font-medium'>
                {session.user.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item
              onClick={() => {
                signOut();
              }}
            >
              Sign out
            </Dropdown.Item>
          </Dropdown>
        </>
      )}
    </div>
  );
}
